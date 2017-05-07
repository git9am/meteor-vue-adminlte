<template>
  <div>
    <box
      size="col-md-3"
      no-padding
      :title="title"
    >
      <ul class="nav nav-stacked edit-list">
        <li v-if="hasTotal" :class="{ active: !selected }">
          <a href="#" @click="select()">
            All
            <span class="pull-right badge bg-light-blue">{{total}}</span>
          </a>
        </li>
        <li v-if="!ready">
          <a style="text-align: center;"><i class="fa fa-refresh fa-spin"></i></a>
        </li>
        <li
          v-if="ready && g._id"
          v-for="g in groups"
          :class="{ active: selected === g._id }"
        >
          <a href="#" @click="select(g._id)">
            {{g.name}}
            <div class="anti-tools">
              <span
                v-if="g.badge"
                class="pull-right badge bg-aqua"
              >{{g.badge}}</span>
            </div>
            <div class="tools">
              <span
                v-if="g.badge"
                class="pull-right badge bg-aqua"
              >{{g.badge}}</span>
            </div>
          </a>
        </li>
      </ul>
    </box>
  </div>
</template>

<script>
  import FormGroup from './form/FormGroup.vue';

  export default{
    name: 'group-list',
    components: { FormGroup },
    props: {
      title: String,
      groups: Array,
      hasTotal: Boolean,
      total: Number,
      ready: Boolean,
      // editable: Boolean,
    },
    data() {
      return {
        selected: Session.get('selectedGroup'),
      };
    },
    watch: {
      ready(value) {
        if (value && !this.hasTotal) {
          const selected = this.groups[0]._id;
          this.selected = selected;
          Session.set('selectedGroup', selected);
        }
      }
    },
    methods: {
      select(id) {
        this.selected = id;
        Session.set('selectedGroup', id);
      },
    },
  };
</script>
