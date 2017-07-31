<template>
  <div>
    <modal :id="'modal-add-'+id" :title="$t('crud.title.add')+title">
      <div :id="'insert-'+id"></div>
      <!-- <div slot="footer">
        <button type="button" class="btn btn-info" data-dismiss="modal" @click="upsert()">{{$t('btn.confirm')}}</button>
      </div> -->
    </modal>

    <modal :id="'modal-edit-'+id" :title="$t('crud.title.edit')+title">
      <div :id="'update-'+id"></div>
      <!-- <div slot="footer">
        <button type="button" class="btn btn-info" data-dismiss="modal" @click="upsert()">{{$t('btn.confirm')}}</button>
      </div> -->
    </modal>

    <modal :id="'modal-delete-'+id" :title="$t('crud.title.delete')+title">
      <div slot="body">
        <slot name="delete">
          <p>{{$t('crud.delete')}}{{title.toLowerCase()}}?</p>
        </slot>
      </div>
      <div slot="footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal" @click="remove()">{{$t('btn.delete')}}</button>
      </div>
    </modal>

    <modal :id="'modal-warning-'+id" title="Warning!">
      <slot name="delete-warning"></slot>
      <div slot="footer">
        <button type="button" class="btn btn-info" data-dismiss="modal">OK</button>
      </div>
    </modal>
  </div>
</template>

<script>
  export default {
    name: 'crud',
    props: ['id', 'table', 'title'],
    methods: {
      remove() {
        Meteor.call('remove' + this.table, Session.get('selectedId'));
      },
    },
    mounted() {
      const collection = MeteorCollections[this.table];
      let schema;
      if (collection._formSchema) {
        schema = collection._formSchema[this.table];
      } else if (!collection._c2 || !collection._c2._simpleSchema) {
        return;
      }

      this.insertForm = Blaze.renderWithData(
        Template.form,
        () => ({
          schema,
          collection: !schema && collection,
          id: 'form-insert-'+this.id,
          type: 'method',
          meteormethod: 'insert' + this.table,
        }),
        document.getElementById('insert-' + this.id)
      );
      this.updateForm = Blaze.renderWithData(
        Template.form,
        () => {
          let selectedId = Session.get('selectedId');
          if (selectedId && selectedId.indexOf('ObjectID') > -1) {
            const objectId = selectedId.substr(10, 24);
            selectedId = new Mongo.Collection.ObjectID(objectId);
          }

          return {
            schema,
            collection: !schema && collection,
            id: 'form-update-'+this.id,
            doc: MeteorCollections[this.table].findOne(selectedId),
            type: 'method-update',
            meteormethod: 'update' + this.table,
          };
        },
        document.getElementById('update-' + this.id)
      );
    },
    beforeDestroy() {
      if (this.insertForm) {
        Blaze.remove(this.insertForm);
      }
      if (this.updateForm) {
        Blaze.remove(this.updateForm);
      }
    }
  };
</script>
