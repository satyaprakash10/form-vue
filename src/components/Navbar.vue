<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
      <router-link to="/">
        <p href="" class="web-style">
          Web Portal
        </p>
      </router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav >
          <b-nav-item href="#" class="services-1">
            <router-link to="/jobs">Jobs</router-link>
            </b-nav-item>
          <!-- <b-nav-item href="#" class="services-1">
            <router-link to="/message">Message</router-link>
          </b-nav-item> -->
          <b-nav-item href="#"  class="services-1">
            <router-link to="/aboutus">About Us</router-link>
          </b-nav-item>    
      </b-navbar-nav>
 
        <b-navbar-nav class="ml-auto">
         

          <b-nav-item-dropdown text="Link" style="font-size:20px;" right>
            <b-dropdown-item href="#" style="font-size:15px;">
             <router-link to="/design">DESIGN</router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#" style="font-size:15px;">
             <router-link to="/products">PRODUCTS</router-link> 
            </b-dropdown-item>
            <!-- <b-dropdown-item href="#" style="font-size:15px;">TODOAPP</b-dropdown-item> -->
            <b-dropdown-item href="#" style="font-size:15px;">
             <router-link to="/todoapp">TODO APP</router-link> 
            </b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
           
            <template v-slot:button-content>
              <em style="font-size:20px;">User</em>
            </template>

            <b-dropdown-item href="#" style="font-size:15px;">
              <router-link to="/signin">Sign In</router-link> 
            </b-dropdown-item>
            <b-dropdown-item href="#" style="font-size:15px;">
              <router-link to="/users"> Sign Up </router-link>
            </b-dropdown-item>
            <!-- <b-dropdown-item href="#" style="font-size:15px;">
              <router-link to="/message">Sign Out</router-link>  
            </b-dropdown-item> -->
          </b-nav-item-dropdown>
          <b-nav-item href="#"  class="services-1">
            <button class="fa fa-user-circle  btn-default " style="color:black;" @click="logout">
              SIGN OUT
              </button>
          </b-nav-item>    
        </b-navbar-nav>
      </b-collapse>
  </b-navbar>
  <!-- <Todo/> -->
</div>

  </div>
</template>
<script>
import Todo from "./TodoList";
import firebase from "firebase";
export default {
  components: {
    Todo
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

 <style >
   .web-style {
     color: white;
     padding-top:5px; 
     text-decoration: none;
     font-size:25px;
   }
   .services-1{
     color: white;
     text-decoration:none;
     font-size: 18px;
   }
   

    @media screen and (max-width: 780px) {
      .b-navbar-toggle {
        margin-left: 3 50px;
      }
    }
 </style>