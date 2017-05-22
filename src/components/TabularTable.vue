<template>
  <div>
    <box :size="size" :title="tableTitle">
      <div slot="box-tools">
        <slot name="tools"></slot>
        <button
          v-if="addable"
          type="button"
          class="btn btn-success btn-xs"
          data-toggle="modal"
          :data-target="'#modal-add-'+id"
        >
          <i class="fa fa-plus"></i> {{$t('btn.add')}}
        </button>
      </div>
      <slot name="actions"></slot>
      <div :id="'table-'+id" style="overflow-x: scroll"></div>
    </box>

    <crud :id="id" :table="table" :title="name" />
  </div>
</template>

<script>
  export default {
    name: 'TabularTable',
    props: {
      id: String,
      size: {
        type: String,
        default: 'col-md-12',
      },
      name: String,
      table: String,
      tableTitle: String,
      addable: Boolean,
      subscribes: Array,
      groupBy: String,
    },
    mounted() {
      this.subscribes && this.subscribes.forEach((sub) => {
        this.$subscribe(sub, []);
      });

      this.blazeTable = Blaze.renderWithData(
        Template.tabular,
        () => {
          const options = {
            table: TabularTables[this.table],
            class: 'table table-condensed table-striped table-bordered table-hover dataTable',
            responsive: true,
            autoWidth: false,
          };
          const selector = Session.get('selector') || {};
          if (this.groupBy) {
            const group = Session.get('selectedGroup');
            if (group) {
              selector[this.groupBy] = group;
            }
            options.selector = selector;
          }
          return options;
        },
        document.getElementById('table-'+this.id)
      );
    },
    beforeDestroy() {
      Blaze.remove(this.blazeTable);
    },
  };
</script>
