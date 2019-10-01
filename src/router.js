import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import webportal from "./views/WebPortal.vue";
import link from "./views/Link.vue";
import message from "./views/Message.vue";
import aboutus from "./views/About.vue";
import jobs from "./views/Jobs.vue";
import  users from "./views/Users.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      // name: "webportal",
      component: webportal
    },
    {
      path: "/link",
      component: link
    },
    {
      path: "/message",
      component: message
    },
    {
      path: "/aboutus",
      component: aboutus
    },
    {
      path: "/jobs",
      component: jobs
    },
    {
      path: "/users",
      component: users
    }
  ]
});
