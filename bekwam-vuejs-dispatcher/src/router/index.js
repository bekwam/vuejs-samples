import { createRouter, createWebHistory } from "vue-router";
import Landing from "../subsystem_core/Landing.vue";
//import KeyNotFound from '../subsystem_core/KeyNotFound.vue'
import aHome from "../subsystem_a/Home.vue"
import bHome from "../subsystem_b/Home.vue";
import Dispatcher from "../subsystem_core/Dispatcher.vue";

const routes = [
  {
    path: "/",
    name: 'Landing',
    component: Landing
  },
  {
    path: "/:key",
    name: "dispatcher",
    component: Dispatcher,
    props: route => ({ mode: (route.query.mode)?route.query.mode:"auto" })
  },
  {
    path: "/:key/a",
    name: "a.home",
    component: aHome
  },
  {
    path: "/:key/b",
    name: 'b.home',
    component: bHome
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
