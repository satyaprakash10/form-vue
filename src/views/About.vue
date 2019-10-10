<template>
  <div class="about">
      <div class="container-fluid serv-1">
        <h1 class="serv-title">Our Work Pages</h1>
        <ul class="serv">
            <li><a href="" style="margin-right:10px;" > Home</a></li>
            <li><a href="" style="color:grey;"> / About Us</a></li>
        </ul>
     </div>
      <h1 style="margin-top:20px;">This is an about page</h1>
      <div class="container" style="margin-top:60px; background-color:skyblue;">
        <div class="row">
          <div class="col-md-4">
            <div class="card box-style">
              <div class="card-header">
                <h1>Page-1</h1>
              </div>
              <div class="card-body" style="font-size:20px;">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sunt similique voluptate alias veniam. Eveniet sed velit recusandae molestias
                possimus ex quam fugit aut obcaecati repellendus? Necessitatibus modi a eum.</p>
                <button class="btn btn-primary" style="font-size:20px;">Read More</button>
            </div>
          </div>
        </div>
        <div class="col-md-4  box-style">
          <div class="card">
            <div class="card-header">
              <h1>Page-2</h1>
            </div>
            <div class="card-body" style="font-size:20px;" >
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sunt similique voluptate alias veniam. Eveniet sed velit recusandae molestias
                possimus ex quam fugit aut obcaecati repellendus? Necessitatibus modi a eum.</p>
                <button class="btn btn-primary" style="font-size:20px;">Read More</button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-header" >
              <h1>Page-3</h1>
            </div>
            <div class="card-body" style="font-size:20px;">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sunt similique voluptate alias veniam. Eveniet sed velit recusandae molestias
                possimus ex quam fugit aut obcaecati repellendus? Necessitatibus modi a eum.</p>
                <button class="btn btn-primary" style="font-size:20px;">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style >
  @media screen and (max-width:786px) {
    .box-style {
      margin-bottom: 50px;
    }
  }
</style>