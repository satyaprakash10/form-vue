import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuelidate from 'vuelidate'

// import { store } from "./store/store";
// import firebase from "firebase";
import Vuex from 'vuex'

Vue.use(Vuex)

window.eventBus = new Vue()

Vue.config.productionTip = false
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(Vuelidate)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// const config = {
//   apiKey: "AIzaSyDL1PCbAJGkMJsV7utnkmDUvikdnQJWdeQ",
//   authDomain: "vue-firebase-demo-fc0f1.firebaseapp.com",
//   databaseURL: "https://vue-firebase-demo-fc0f1.firebaseio.com",
//   projectId: "vue-firebase-demo-fc0f1",
//   storageBucket: "vue-firebase-demo-fc0f1.appspot.com",
//   messagingSenderId: "YOUR_MESSAGING_SEND_ID"
// };
// firebase.initializeApp(config);
// Vue.use(firebase);
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
