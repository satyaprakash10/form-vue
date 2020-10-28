import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'

import Layout from './components/Layout.vue'
import Home from './views/Home.vue'
import WebPortal from './views/WebPortal.vue'
import Link from './views/Link.vue'
import Message from './views/Message.vue'
import AboutUs from './views/About.vue'
import Jobs from './views/Jobs.vue'
import Users from './views/Users.vue'
// import SignIn from './views/SignIn.vue'
// import SignOut from './views/SignOut.vue'
// import TodoApp from './components/TodoList.vue'
import Design from './views/Design.vue'
import Products from './views/Product.vue'

Vue.use(Router)

const router = new Router({
  path: '/admin',
  component: Layout, // Change the desired Layout here
  routes: [
    {
      path: '/',
      component: WebPortal
    },
    {
      path: '/link',
      component: Link
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/aboutus',
      component: AboutUs
    },
    {
      path: '/jobs',
      component: Jobs
    },
    {
      path: '/users',
      component: Users
    },
    // {
    //   path: '/signin',
    //   component: signin
    // },
    {
      path: '/design',
      component: Design
    },
    {
      path: '/products',
      component: Products
    },
    {
      path: '/home',
      component: Home
    }
    // {
    //   path: '/signout',
    //   component: signout,
    //   meta: {
    //     requireAuth: true
    //   }
    // },
    // {
    //   path: '/todo',
    //   component: todoapp,
    //   meta: {
    //     requireAuth: true
    //   }
    // }
  ]
})

// router.beforeEach((to, from, next) => {
//   let currentUser = firebase.auth().currentUser
//   const requireAuth = to.matched.some(record => record.meta.requireAuth)

//   console.log(firebase.auth())

//   if (requireAuth && !currentUser) next('signin')
//   else if (!requireAuth && currentUser) next('todo')
//   else next()
// })

//  window.localStorage.getItem('token')
export default router
