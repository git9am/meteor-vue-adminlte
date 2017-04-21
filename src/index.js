import Vue from 'vue';
import VueMeteorTracker from 'vue-meteor-tracker';

import i18n from './i18n';
import router from './router';

import Sidebar from './main/Sidebar.vue';
import UserMenu from './main/UserMenu.vue';
import ContentHeader from './main/ContentHeader.vue';
import './components';

Vue.use(VueMeteorTracker);
Vue.config.meteor.subscribe = function(...args) {
  return subsCache.subscribe(...args);
};

export default function(opts) {
  new Vue({
    i18n: i18n(opts.i18n),
    router: router(opts.routes, opts.beforeEach),
    components: {
      Sidebar,
      UserMenu,
      ContentHeader,
    },
    meteor: {
      data: {
        menus: opts.menus,
      },
    },
    methods: {
      toggleSidebar() {
        const collapse = +Cookie.get('sidebar_collapse');
        if (collapse) {
          Cookie.set('sidebar_collapse', 0);
        } else {
          Cookie.set('sidebar_collapse', 1);
        }
      },
    },
    mounted() {
      $.AdminLTE.layout.fix()
      $.AdminLTE.controlSidebar.activate()
    },
  }).$mount('#app');
}
