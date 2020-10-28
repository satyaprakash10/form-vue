<template>
  <div class="container mt-40">
    <div class="row services px-10 py-10">
      <div class="col-md-3 text-center">
        <div class="icon">
          <i class="fa fa-desktop"></i>
        </div>
        <h3>Web Development</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          obcaecati consectetur maxime repellat quisquam itaque voluptatibus
          saepe, dolorum neque placeat veritatis tenetur iure nemo velit minima
          ducimus necessitatibus ad error?
        </p>
      </div>

      <div class="col-md-3 text-center">
        <div class="icon">
          <i class="fa fa-tablet"></i>
        </div>
        <h3>App Development</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          obcaecati consectetur maxime repellat quisquam itaque voluptatibus
          saepe, dolorum neque placeat veritatis tenetur iure nemo velit minima
          ducimus necessitatibus ad error?
        </p>
      </div>

      <div class="col-md-3 text-center">
        <div class="icon">
          <i class="fa fa-line-chart"></i>
        </div>
        <h3>Graphic Design</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          obcaecati consectetur maxime repellat quisquam itaque voluptatibus
          saepe, dolorum neque placeat veritatis tenetur iure nemo velit minima
          ducimus necessitatibus ad error?
        </p>
      </div>

      <div class="col-md-3 text-center">
        <div class="icon">
          <i class="fa fa-paint-brush"></i>
        </div>
        <h3>Digital MArketing</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          obcaecati consectetur maxime repellat quisquam itaque voluptatibus
          saepe, dolorum neque placeat veritatis tenetur iure nemo velit minima
          ducimus necessitatibus ad error?
        </p>
      </div>

      <!-- <div class="flex justify-center">
          <button class="btn btn-primary ">
            Learn More
          </button>
        </div> -->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.serv-1 {
  margin-top: -19px;
  background: rgb(236, 232, 232);
}
.serv-title {
  margin-top: 14px;
  font-size: 39px;
  color: black;
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
  background-image: linear-gradient(
    rgba(90, 93, 94, 0.8),
    rgba(39, 39, 39, 0.8)
  );
  background-size: center;
  color: #eeffee !important;
  background-attachment: fixed;
  padding-top: 50px;
  padding-bottom: 50px;
}

.services h1::after {
  content: '';
  background: #070707;
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
  border: 1px solid #fff;
  border-radius: 50%;
}

.services p {
  font-size: 14px;
  margin-top: 20px;
  color: #ccc;
}

.services .col-md-3:hover {
  background: #167bda;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.7s;
  color: white;
}
</style>
