import Vue from "vue";
import Router from "vue-router";
import firebase from "firebase";

// import Home from "./views/Home.vue";
import webportal from "./views/WebPortal.vue";
import link from "./views/Link.vue";
import message from "./views/Message.vue";
import aboutus from "./views/About.vue";
import jobs from "./views/Jobs.vue";
import users from "./views/Users.vue";
import signin from "./views/SignIn.vue";
import signout from "./views/SignOut.vue";
import todoapp from "./components/TodoList.vue";
import design from "./views/Design.vue";
import products from "./views/Product.vue";

Vue.use(Router);

const router = new Router({
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
    },
    {
      path: "/signin",
      component: signin
    },
    { 
      path: "/design",
      component: design
    },
    {
      path: "/products",
      component: products
    },
    {
      path: "/signout",
      component: signout,
      meta: {
        requireAuth: true
      }
    },
    {
      path: "/todo",
      component: todoapp,
      meta: {
        requireAuth: true
      }
    }
  ]
});

 router.beforeEach((to, from, next) => {

   let currentUser = firebase.auth().currentUser;
   const requireAuth = to.matched.some(record => record.meta.requireAuth);

   console.log(firebase.auth())

 
   if (requireAuth && !currentUser) next('signin');
   else if (!requireAuth && currentUser) next('todo');
   else next();   
 });

//  window.localStorage.getItem('token')
 export default router;