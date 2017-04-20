import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default function router(routes) {
  return new VueRouter({
    mode: 'history',
    base: __dirname,
    routes,
  });
};
