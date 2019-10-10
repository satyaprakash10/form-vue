<template>
    <div id="app">
			<div class="container-fluid serv-1">
        <h1 class="serv-title">Our Work Designs</h1>
        <ul class="serv">
            <li><a href="" style="margin-right:10px;" > Home</a></li>
            <li><a href="" style="color:grey;"> / Designs</a></li>
        </ul>
     </div>
		 <hr>
			<div class="row" style="margin-top:50px;">
				<div class="col-md-3">
					<div class="card design-box">
						<div class="card-header">
					   <h3>Design-1</h3>
						</div>
						<div class="card-body">
             <a href=""><img :src="image" ></a>     
						</div>
						<div class="card-footer">
							<h3>Design made by webAdmin..</h3>
							<button class="btn btn-default" style="font-size:15px; margin-right:10px;">Preview</button>
							<button class="btn btn-success">Buy Now</button>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="card design-box">
						<div class="card-header">
					   <h3>Design-2</h3>
						</div>
						<div class="card-body">
             <a href=""><img :src="image1" ></a>     
						</div>
						<div class="card-footer">
							<h3>Design made by webAdmin..</h3>
							<button class="btn btn-default"style="font-size:15px; margin-right:10px;">Preview</button>
							<button class="btn btn-success">Buy Now</button>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="card design-box">
						<div class="card-header">
					   <h3>Design-3</h3>
						</div>
						<div class="card-body">
             <a href=""><img :src="image2" ></a>     
						</div>
						<div class="card-footer">
							<h3>Design made by webAdmin..</h3>
							<button class="btn btn-default"style="font-size:15px; margin-right:10px;">Preview</button>
							<button class="btn btn-success">Buy Now</button>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="card design-box">
						<div class="card-header">
							<h3>Design-4</h3>
						</div>
						<div class="card-body">
							<a href=""><img :src="image" ></a>     
						</div>
						<div class="card-footer">
							<h3>Design made by webAdmin..</h3>
							<button class="btn btn-default"style="font-size:15px; margin-right:10px;">Preview</button>
							<button class="btn btn-success">Buy Now</button>
						</div>
				</div>
			</div>
			</div>
    </div>
</template>

<script>
import image from "../assets/comp1.jpg";
import image1 from "../assets/comp2.jpg";
import image2 from "../assets/comp3.jpg";

export default {
    omponents: {
    },
     data()
  {
    return{
      
		 image: image,
		 image1: image1,
		 image2: image2
    }
  }
}
</script>

<style >
 @media screen and (max-width:786px) {
	 .design-box {
		 margin-top: 25px;
	 }
 }
</style> 