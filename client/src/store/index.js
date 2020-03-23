import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const baseURL = axios.create({
  baseURL: "http://localhost:3000"
});
export default new Vuex.Store({
  state: {
    isLogin: false,
    countries: [],
    reports: [],
    username: "user"
  },
  mutations: {
    username(state) {
      state.username = localStorage.getItem("username")
    },
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
    },
    countries(state, payload) {
      state.countries = payload;
    },
    reports(state, payload) {
      state.reports = payload;
    }
  },
  actions: {
    getCountries(context) {
      baseURL({
        method: "get",
        url: "/countries",
        headers: {
          token: localStorage.getItem("token")
        }
      })
        .then(({ data }) => {
          context.commit("countries", data);
        })
        .catch(({ response }) => {
          console.log(response);
        });
    },
    getReports(context) {
      baseURL({
        method: "get",
        url: "/reports",
        headers: {
          token: localStorage.getItem("token")
        }
      })
        .then(({ data }) => {
          context.commit("reports", data);
        })
        .catch(({ response }) => {
          console.log(response);
        });
    }
  },
  modules: {}
});
