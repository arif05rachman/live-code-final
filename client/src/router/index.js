import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Country from "../components/Country.vue";
import Profil from "../components/Profil.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    children: [
      {
        path: "",
        name: Country,
        component: Country
      },
      {
        path: "/profil",
        name: Profil,
        component: Profil
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
