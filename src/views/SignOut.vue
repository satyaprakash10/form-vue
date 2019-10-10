 <template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <button @click="logout()" style="font-size:20px;">Logout</button>
      <span style="font-size:20px;">or go back to <router-link to="/signin">login</router-link>.</span>
  </div>
</template>

<script>
import firebase from 'firebase';
 
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  methods: {
    logout: function() {
    alert()
      firebase.auth().signOut().then(() => {
        console.log('sda')
        this.$router.replace('signin')
      })
    }
  }
}
</script>