<template>
    <div class="login col-md-4">
       <h1>SIGN IN</h1>
       <form action="/">
        <input type="email" v-model="email" id="email" name="email" class="form-control" style="font-size:15px;" placeholder="Email"/><br>
        <input type="password" v-model="password" id="password" name="password" class="form-control" style="font-size:15px;"placeholder="password"/><br> 
        <button @click="login" style="font-size:15px;">Connection</button>
       </form>
       <!-- <input type="text" v-model="email" placeholder="Email"><br>
       <input type="text" name="password" v-model="password" placeholder="password"><br> -->
       
        <p style="font-size:15px;">You don't have an account ? You can <router-link to="/users">Create one</router-link></p>
        <!-- <div>
          <ul class="icons-style">
            <li><a href=""><i class="fab fa-google-plus-g" style="font-size:20px; "></i></a></li>
            <li><a href=""><i class="fab fa-facebook" style="font-size:20px; color:blue;"></i></a></li>    
          </ul>
        </div>  -->
    </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: 'login',
  data() {
      return {
          email: '',
          password: '',
          token: ''
      }
  },
  methods: {
      login: function() {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
              function(result) {
                console.log(user)
                  this.token = result.user.refreshToken
                  window.localStorage.setItem('token', this.token)
                  alert('Well done ! you are now connected')
                   this.$router.push("/todo?");
              },
              function(err) {
                  alert('Oops .'+ err.message)
              }
          );
      }
    }
  }   
</script>
<style >
    .login {
      margin-left: 550px;
      justify-content:center;
      margin-top: 100px;
    }
    .icons-style {
      /* display: flex; */
      flex-direction: column;
      list-style: none;
    }

    @media screen and (max-width: 780px) {
      .login {
        margin-left: 0px;
        /* width:50px; */
        margin-top: 100px;
      }
    }
</style>