 <template>
    <div id="app">
			<div class="container-fluid serv-1">
        <h1 class="serv-title">Our Basic Products Overview</h1>
        <ul class="serv">
            <li><a href="" style="margin-right:10px;" > Home</a></li>
            <li><a href="" style="color:grey;"> / Products</a></li>
        </ul>
     </div>
     <hr>
			<div class="row" style="margin-top:50px;">
				<div class="col-md-3">
					<div class="card design-box">
						<div class="card-header">
					   <h3>Product-1</h3>
						</div>
						<div class="card-body">
             				<a href=""><img :src="image" ></a>     
						</div>
						<div class="card-footer">
							<h3>Design made by webAdmin..</h3>
               <p> um quia dignissimos animi illum, labore quibusdam modi. 
                Quo temporibus provident maxime enim. Modi dolorum eligendi corrupti omnis 
                repellendus ipsam doloremque</p>
							<button class="btn btn-default" style="font-size:15px; margin-right:10px;">Preview</button>
							<button class="btn btn-success">Buy Now</button>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="card design-box">
						<div class="card-header">
					   <h3>Product-2</h3>
						</div>
						<div class="card-body">
             <a href=""><img :src="image1" ></a>     
						</div>
						<div class="card-footer">
							<h3>Design made by webAdmin..</h3>
               <p> um quia dignissimos animi illum, labore quibusdam modi. 
                Quo temporibus provident maxime enim. Modi dolorum eligendi corrupti omnis 
                repellendus ipsam doloremque</p>
							<button class="btn btn-default"style="font-size:15px; margin-right:10px;">Preview</button>
							<button class="btn btn-success">Buy Now</button>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="card design-box">
						<div class="card-header">
					   <h3>Product-3</h3>
						</div>
						<div class="card-body">
             <a href=""><img :src="image2" ></a>     
						</div>
						<div class="card-footer">
							<h3>Design made by webAdmin..</h3>
               <p> um quia dignissimos animi illum, labore quibusdam modi. 
                Quo temporibus provident maxime enim. Modi dolorum eligendi corrupti omnis 
                repellendus ipsam doloremque</p>
							<button class="btn btn-default"style="font-size:15px; margin-right:10px;">Preview</button>
							<button class="btn btn-success">Buy Now</button>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<div class="card design-box">
						<div class="card-header">
							<h3>Product-4</h3>
						</div>
						<div class="card-body">
							<a href=""><img :src="image" ></a>     
						</div>
						<div class="card-footer">
							<h3>Design made by webAdmin..</h3>
                <p> um quia dignissimos animi illum, labore quibusdam modi. 
                Quo temporibus provident maxime enim. Modi dolorum eligendi corrupti omnis 
                repellendus ipsam doloremque</p>
							<button class="btn btn-default" style="font-size:15px; margin-right:10px;">Preview</button>
							<button class="btn btn-success">Buy Now</button>
						</div>
				</div>
			</div>
			</div>
    </div>
</template>

<script>
import image from "../assets/prod1.jpg";
import image1 from "../assets/prod2.jpg";
import image2 from "../assets/prod3.jpg";

export default {
    components: {
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