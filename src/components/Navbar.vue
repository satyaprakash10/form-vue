<template>
  <!-- ======= Header ======= -->
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">
      <h1 class="logo mr-auto">
        <a href="index.html">Demo<span>.</span></a>
      </h1>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active"><a href="index.html">Home</a></li>
          <li>
            <router-link to="/jobs">
              <a href="/jobs">Portfolio</a>
            </router-link>
          </li>
          <li><a href="#portfolio">About</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li class="drop-down flex">
            <a href="#" class="">Drop Down </a>
            <ul>
              <li><a href="#">Drop Down 1</a></li>
              <li class="drop-down">
                <a href="#">Deep Drop Down</a>
                <ul>
                  <li><a href="#">Deep Drop Down 1</a></li>
                  <li><a href="#">Deep Drop Down 2</a></li>
                  <li><a href="#">Deep Drop Down 3</a></li>
                  <li><a href="#">Deep Drop Down 4</a></li>
                  <li><a href="#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="#">Drop Down 2</a></li>
              <li><a href="#">Drop Down 3</a></li>
              <li><a href="#">Drop Down 4</a></li>
            </ul>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <!-- .nav-menu -->
      <a href="#about" class="get-started-btn scrollto">Get Started</a>
    </div>
  </header>
  <!-- End Header -->
</template>

<script>
// import firebase from 'firebase'
import { ChevronDownIcon } from '@vue-hero-icons/outline'

export default {
  components: {
    ChevronDownIcon
  },
  methods: {
    // logout: function() {
    //   alert()
    //   firebase
    //     .auth()
    //     .signOut()
    //     .then(() => {
    //       console.log('sda')
    //       this.$router.replace('signin')
    //     })
    // }
  },

  // Toggle Button
  myFunction: function(x) {
    x.classList.toggle(this.change)
  }
}
</script>

<style>
@media screen and (max-width: 780px) {
  .nav {
    width: fit-content;
  }

  .list-items {
    display: none;
  }
}
</style>
