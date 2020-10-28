<template>
  <div>
    <!-- <div class="bd-example"> -->
    <div class="container">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleCaptions"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="carousel-caption d-none d-md-block">
              <h5 style="text-align:center; font-size:30px;">
                WELCOME TO THE WORKSIDE OF WEB PORTAL..
              </h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
            <img :src="image" class="d-block w-100 h-50" alt="..." />
          </div>
          <div class="carousel-item">
            <img :src="image2" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img :src="image3" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
  <!-- <div class="container-fluid" style="margin-top:;">
    <h1>Welcome to the Web Portal. </h1>
    </div> -->
  <!-- </div> -->
</template>

<script>
import image from '../assets/sample 1.jpg'
import image2 from '../assets/sample2.jpg'
import image3 from '../assets/sample3.jpg'
export default {
  components: {},
  data() {
    return {
      image: image,
      image2: image2,
      image3: image3
    }
  },
  methods: {}
}
</script>

<style></style>
