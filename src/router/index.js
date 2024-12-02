import VueRouter from "vue-router";
import Vue from "vue";
import PaginaInicial from "@/components/PaginaInicial.vue";

Vue.use(VueRouter);

const routes = [
  {
    path:"/",
    component: PaginaInicial
    
  }
]

const router = new VueRouter({
  mode:"history",
  routes,
})

export default router;