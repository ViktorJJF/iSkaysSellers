import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
// import "./plugins/bootstrap-vue";
import "./plugins/deepCopy";
import "./plugins/sockets";
import "./plugins/veeValidate";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import "jqu";

import axios from "axios";

window.axios = axios;
import "./bootstrap";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
