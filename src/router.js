import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default function router(routes, beforeEach) {
  const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes,
  });

  if (beforeEach) {
    router.beforeEach(beforeEach)
  }

  return router;
};
