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
      this.insertForm = Blaze.renderWithData(
        Template.form,
        () => ({
          collection: MeteorCollections[this.table],
          id: 'form-insert-'+this.id,
          type: 'method',
          meteormethod: 'insert' + this.table,
        }),
        document.getElementById('insert-' + this.id)
      );
      this.updateForm = Blaze.renderWithData(
        Template.form,
        () => ({
          collection: MeteorCollections[this.table],
          id: 'form-update-'+this.id,
          doc: MeteorCollections[this.table].findOne(Session.get('selectedId')),
          type: 'method-update',
          meteormethod: 'update' + this.table,
        }),
        document.getElementById('update-' + this.id)
      );
    },
    beforeDestroy() {
      Blaze.remove(this.insertForm);
      Blaze.remove(this.updateForm);
    }
  };
</script>
