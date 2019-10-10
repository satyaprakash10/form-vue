<template>
  <div>
    <div class="container-fluid title" style="width:100%;">
      <!-- <div class="title"> -->
      <h1>User Registration Page.</h1>
      <ul class="list-style">
        <li>
          <a href style="margin-right:10px;">Home</a>
        </li>
        <li>
          <a href style="color:grey; ">  /   Users</a>
        </li>
      </ul>
      <!-- </div> -->
    </div>

    <div class="sub-section mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="card-header bg-white mt-4">
              <h1 style="font-size:30px;">Sign Up with an New Account.   <small class=""> <a href="#home">Vuelidate - Form</a> </small></h1>
              <hr />
              <div></div>
              <form @submit.prevent="handleSubmit" style="margin-top:20px;">
                <div class="card bg-grey">
                  <div class="form-group">
                    <label for="firstName" style="font-size:20px;">First Name</label>
                    <input
                      type="text"
                      v-model="user.firstName"
                      id="firstName"
                      name="firstName"
                      class="form-control"
                      :class="{ 'is-invalid': submitted && $v.user.firstName.$error }"
                    />
                    <div
                      v-if="submitted && !$v.user.firstName.required"
                      class="invalid-feedback"
                    >First Name is required</div>
                  </div>
                  <div class="form-group">
                    <label for="lastName" style="font-size:20px;">Last Name</label>
                    <input
                      type="text"
                      v-model="user.lastName"
                      id="lastName"
                      name="lastName"
                      class="form-control"
                      :class="{ 'is-invalid': submitted && $v.user.lastName.$error }"
                    />
                    <div
                      v-if="submitted && !$v.user.lastName.required"
                      class="invalid-feedback"
                    >Last Name is required</div>
                  </div>
                  <div class="form-group">
                    <label for="email" style="font-size:20px;">Email</label>
                    <input
                      type="email"
                      v-model="user.email"
                      id="email"
                      name="email"
                      class="form-control"
                      :class="{ 'is-invalid': submitted && $v.user.email.$error }"
                    />
                    <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                      <span v-if="!$v.user.email.required">Email is required</span>
                      <span v-if="!$v.user.email.email">Email is invalid</span>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="password" style="font-size:20px;">Password</label>
                    <input
                      type="password"
                      v-model="user.password"
                      id="password"
                      name="password"
                      class="form-control"
                      :class="{ 'is-invalid': submitted && $v.user.password.$error }"
                    />
                    <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                      <span v-if="!$v.user.password.required">Password is required</span>
                      <span
                        v-if="!$v.user.password.minLength"
                      >Password must be at least 6 characters</span>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="confirmPassword" style="font-size:20px;">Confirm Password</label>
                    <input
                      type="password"
                      v-model="user.confirmPassword"
                      id="confirmPassword"
                      name="confirmPassword"
                      class="form-control"
                      :class="{ 'is-invalid': submitted && $v.user.confirmPassword.$error }"
                    />
                    <div
                      v-if="submitted && $v.user.confirmPassword.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.confirmPassword.required">Confirm Password is required</span>
                      <span v-else-if="!$v.user.confirmPassword.sameAsPassword">Passwords must match</span>
                    </div>
                  </div>
                  <div class="form-group">
                    <button class="btn btn-success" style="font-size:20px;" @click="createUser">SignUp</button>
                  </div>
                    <span style="font-size:20px;">or go back to <router-link to="/signin">login</router-link>.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  name: "app",
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
      },
      submitted: false
    };
  },
  validations: {
    user: {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      confirmPassword: { required, sameAsPassword: sameAs("password") }
    }
  },
  methods: {
    createUser () {
       this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      } 
      console.log(this.email)
      console.log(this.password)
      firebase.auth().createUserWithEmailAndPassword(this.user.email, this.user.password).then((res)=> {
        console.log(res)
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode,errorMessage);
        
        // ...
      });
    },
    handleSubmit(e) {
      this.submitted = true;
      //  {
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
           function(user) {
               alert('well done ! your new account has been created')
           },
           function(err) {
               alert('Oops .'+ err.message)
           }
        );
      // }
      // stop here if form is invalid
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      
      alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.user));
    }
  }
};
</script>


 <style>
.sub-section {
  background-color: #fff8f8;
}
.title {
  width: 100%;
  /* padding-right:  */
  margin-top: -29px;
  float: left;
  font-size: 25px;
  background: rgb(236, 232, 232);
}
.list-style {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  margin-right: 35px;
  justify-content: center;
  font-size: 20px;
  list-style: none;
  color: aqua;
}
.icons-style {
  display: flex;
  flex-direction: column;
  list-style: none;
}
</style>