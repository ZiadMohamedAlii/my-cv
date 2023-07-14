import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Api from "@/views/ApiView.vue";
import productsDetails from "@/views/ProductsDetails.vue";

const routes = [
  {
    //HOME route record
    name: "home",
    path: "/",
    component: Home,
  },
  {
    //Api route record
    name: "api",
    path: "/api",
    component: Api,
  },
  {
    name: "details",
    path: "/products/:name/:id",
    component: productsDetails,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes, // Remove the outer array brackets here
});

export default router;
