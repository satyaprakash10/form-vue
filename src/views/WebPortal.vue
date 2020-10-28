<template>
  <div>
    <!-- Slider-Section -->
    <div
      id="carousel-example-1z"
      class="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <!--Indicators-->
      <ol class="carousel-indicators">
        <li
          data-target="#carousel-example-1z"
          data-slide-to="0"
          class="active"
        ></li>
        <li data-target="#carousel-example-1z" data-slide-to="1"></li>
        <li data-target="#carousel-example-1z" data-slide-to="2"></li>
      </ol>
      <!--/.Indicators-->
      <!--Slides-->
      <div class="carousel-inner" role="listbox">
        <!--First slide-->
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg"
            alt="First slide"
          />
        </div>
        <!--/First slide-->
        <!--Second slide-->
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg"
            alt="Second slide"
          />
        </div>
        <!--/Second slide-->
        <!--Third slide-->
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
            alt="Third slide"
          />
        </div>
        <!--/Third slide-->
      </div>
      <!--/.Slides-->
      <!--Controls-->
      <a
        class="carousel-control-prev"
        href="#carousel-example-1z"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carousel-example-1z"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
      <!--/.Controls-->
    </div>
    <!--/.Carousel Wrapper-->

    <!-- Portfolio Demo -->
    <h2 class="font-weight-bold my-5 text-center">
      Portfolio Demo

      <hr />
    </h2>

    <div class="container">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10"
      >
        <div class="col-sm-12">
          <div class="card  shadow shadow-md">
            <a data-size="1600x1067" class="">
              <img
                src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(65).jpg"
                class=" img-fluid z-depth-1 absolute transition duration-200 ease-in opacity-0 hover:opacity-100 hover:"
              />
              <img
                src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(62).jpg"
                class="z-10"
              />
            </a>
          </div>
        </div>

        <div class="col-sm-12">
          <div class="card shadow shadow-md">
            <a data-size="1600x1067" class="">
              <img
                src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(65).jpg"
                class=" img-fluid z-depth-1 absolute transition duration-200 ease-in opacity-0 hover:opacity-100"
              />
              <img
                src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(69).jpg"
                class="z-10"
              />
            </a>
          </div>
        </div>

        <div class="col-sm-12">
          <div class="card  shadow shadow-md">
            <a data-size="1600x1067" class="">
              <img
                src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(65).jpg"
                class=" img-fluid z-depth-1 absolute transition duration-200 ease-in opacity-0 hover:opacity-100"
              />
              <img
                src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(68).jpg"
                class="z-10"
              />
            </a>
          </div>
        </div>
      </div>

      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 mt-20"
      >
        <div class="col-sm-12">
          <div class="card  shadow shadow-md">
            <a data-size="1600x1067" class="">
              <img
                src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(65).jpg"
                class=" img-fluid z-depth-1 absolute transition duration-200 ease-in opacity-0 hover:opacity-100"
              />
              <img
                src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(63).jpg"
                class="z-10"
              />
            </a>
          </div>
        </div>

        <div class="col-sm-12">
          <div class="card  shadow shadow-md">
            <a data-size="1600x1067" class="">
              <img
                src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(66).jpg"
                class=" img-fluid z-depth-1 absolute transition duration-200 ease-in opacity-0 hover:opacity-100"
              />
              <img
                src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(61).jpg"
                class="z-10"
              />
            </a>
          </div>
        </div>

        <div class="col-sm-12">
          <div class="card  shadow shadow-md">
            <a data-size="1600x1067" class="">
              <img
                src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(65).jpg"
                class=" img-fluid z-depth-1 absolute transition duration-200 ease-in opacity-0 hover:opacity-100"
              />
              <img
                src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(64).jpg"
                class="z-10"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueTinySlider from 'vue-tiny-slider'

import {
  ArchiveIcon,
  BriefcaseIcon,
  NewspaperIcon,
  DesktopComputerIcon,
  UserGroupIcon,
  ChevronRightIcon
} from '@vue-hero-icons/outline'
// import func from '../../vue-temp/vue-editor-bridge'

export default {
  components: {
    ArchiveIcon,
    NewspaperIcon,
    BriefcaseIcon,
    DesktopComputerIcon,
    UserGroupIcon,
    ChevronRightIcon,

    'tiny-slider': VueTinySlider
  },
  data() {
    return {
      show: true,
      dataAos: 'fade-up',
      dataAosDelay: '100',
      transitionDelay: '.2s'
    }
  },
  mounted() {
    $('.carousel-3d-autoplay-off').mdbCarousel3d({})
  },

  methods: {
    // MDB Lightbox Init
    // myFunction: function() {
    //   $('#mdb-lightbox-ui').load('mdb-addons/mdb-lightbox-ui.html')
    // }
  }
}
</script>

<style lang="css">

.fade-enter-active, .fade-leave-active:hover() {
  transition: opacity .5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
