import Vue from 'vue'
import { routes } from "./routes";
import VueRouter from 'vue-router';

import App from './App.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
