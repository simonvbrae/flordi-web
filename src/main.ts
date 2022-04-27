import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import VueScrollactive from "vue-scrollactive";
import vuetify from "@/plugins/vuetify";

import "leaflet/dist/leaflet.css";

Vue.config.productionTip = false;

Vue.use(VueScrollactive).use(vuetify);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
