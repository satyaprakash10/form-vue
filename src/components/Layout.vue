<template>
  <div>
    <transition name="bounce">
      <navbar>
        <router-view @click.native="$scrollToTop"></router-view>
      </navbar>
    </transition>
    <footer />
  </div>
</template>

<script type="text/babel">
import Navbar from './Navbar'
import Footer from './Footer'
export default {
  components: {
    Navbar,
    Footer
  },
  data() {
    return {
      name: true,
      header: 'header',
      footer: 'footer'
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0)
    }
  }
}
</script>
