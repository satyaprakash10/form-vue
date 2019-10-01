<template>
    <div>
      <div class="container-fluid serv-1">
        <h1 class="serv-title">Services</h1>
        <ul class="serv">
            <li><a href="" style="margin-right:10px;" > Home</a></li>
            <li><a href="" style="color:grey;"> / Services</a></li>
        </ul>
     </div>
     <div class="container ">
        <h1 style="margin-top:15px;">Our Services</h1>
        <hr>
        <div class="row services">
            <div class="col-md-3 text-center">
            <div class="icon">
                <i class="fa fa-desktop"></i>
            </div>
            <h3>Web Development</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate obcaecati consectetur maxime repellat quisquam itaque voluptatibus 
                saepe, dolorum neque placeat veritatis tenetur iure nemo velit minima ducimus
                necessitatibus ad error?</p>
            </div>
            <div class="col-md-3 text-center">
                <div class="icon">
                <i class="fa fa-tablet"></i>
                </div>
                <h3>App Development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate obcaecati consectetur maxime repellat quisquam itaque voluptatibus 
                saepe, dolorum neque placeat veritatis tenetur iure nemo velit minima ducimus
                necessitatibus ad error?</p>
            </div>
            <div class="col-md-3 text-center">
                <div class="icon">
                    <i class="fa fa-line-chart"></i>
                </div>
                <h3> Graphic Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate obcaecati consectetur maxime repellat quisquam itaque voluptatibus 
                    saepe, dolorum neque placeat veritatis tenetur iure nemo velit minima ducimus
                    necessitatibus ad error?</p>
                </div>
                <div class="col-md-3 text-center">
                <div class="icon">
                    <i class="fa fa-paint-brush"></i>
                </div>
                <h3>Digital MArketing</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate obcaecati consectetur maxime repellat quisquam itaque voluptatibus 
                    saepe, dolorum neque placeat veritatis tenetur iure nemo velit minima ducimus
                    necessitatibus ad error?</p>
            </div>
        </div>
      </div>   

      <div class="container-fluid" style="margin-top:20px;">
        <div class="card">
          <div class="card-footer">
            <button class="btn btn-primary" style="font-size:18px; width:130px; height:50px;">Learn More</button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style>
 .serv-1 {
    margin-top: -19px;
    background: rgb(236, 232, 232);;
 }
 .serv-title {
     margin-top: 14px;
     font-size: 39px;
 }
 .serv {
    display: flex;
    font-size: 17px;
    flex-wrap: nowrap;
    list-style: none;
    justify-content: center;
    margin-right: 30px;
 }

 
.services {
  /* background-image: linear-gradient(rgba(0,0,0,0.8)),url(1.jpg);0 */
  background-image: linear-gradient(rgba(107, 99, 99, 0.8),rgba(0,0,0,0.8));
  background-size: center;
  color: #eeffee !important;
  background-attachment: fixed;
  padding-top: 50px;
  padding-bottom: 50px;
}

.services h1::after {
  content: '';
  background: #eeffee;
  display: block;
  height: 3px;
  width: 170px;
  margin: 20px auto 5px;
}

.services {
   margin-top: 40px;
}

.icon {
  font-size: 40px;
  margin: 20px auto;
  padding: 20px;
  height: 80px;
  width: 80px;
  border:1px solid #fff;
  border-radius: 50%;
}

.services p {
  font-size: 14px;
  margin-top: 20px;
  color: #ccc;
}

.services .col-md-3:hover {
  background: #167bda;
  cursor: pointer;
  transition: 0.7s;
}

</style>