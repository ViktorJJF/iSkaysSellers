import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
Vue.use(Vuex);

export default new Vuex.Store({
  modules,
  state: {
    token: localStorage.getItem("token") || "",
    user: null,
    users: [],
    componentKey: 0,
    toolbar: {
      drawerIcon: null,
    },
  },
});
