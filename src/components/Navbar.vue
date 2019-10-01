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
          <b-nav-item href="#" class="services-1">
            <router-link to="/message">Message</router-link>
            </b-nav-item>
          <b-nav-item href="#"  class="services-1">
            <router-link to="/aboutus">About Us</router-link>
            </b-nav-item>    
        </b-navbar-nav>
 
        <b-navbar-nav class="ml-auto">
         

          <b-nav-item-dropdown text="Link" style="font-size:20px;" right>
            <b-dropdown-item href="#" style="font-size:15px;">DESIGN</b-dropdown-item>
            <b-dropdown-item href="#" style="font-size:15px;">EDITING</b-dropdown-item>
            <b-dropdown-item href="#" style="font-size:15px;">TESTING</b-dropdown-item>
            <b-dropdown-item href="#" style="font-size:15px;">TOOLS</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
           
            <template v-slot:button-content>
              <em style="font-size:20px;">User</em>
            </template>
            <b-dropdown-item href="#" style="font-size:15px;">
              <router-link to="/users"> Users-form </router-link>
            </b-dropdown-item>
            <b-dropdown-item href="#" style="font-size:15px;">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
  </b-navbar>
</div>

  </div>
</template>
<script>
export default {
  
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
 </style>