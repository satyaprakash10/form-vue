import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuelidate from "vuelidate";


Vue.config.productionTip = false;
import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(Vuelidate);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
