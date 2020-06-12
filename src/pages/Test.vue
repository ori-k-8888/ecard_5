<template>
  <div class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
    <div id="loading-wrapper" class="transition-all duration-1000 ease-in-out" v-if="loading">
      <div id="loading-text">ReSpark</div>
      <div id="loading-content"></div>
    </div>
    <div id="page-content">
      <h1 v-if="!loading">Hello World!!!!!!!</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true
    };
  },

  mounted() {
    console.log("__MOUNTED__");
    //
    setTimeout(() => {
      console.log("__TIMEOUT__");
      const image = new Image();
      image.onload = () => {
        console.log("__image loaded__");
        const body = document.getElementsByTagName("body")[0];
        // adding styles to loag BG image after load
        body.classList.add("h-screen", "w-full", "bg-cover");
        body.style.backgroundImage = `url(${image.src})`;
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundPosition = "center center";

        //changing opacity to create transition effect
        const loadingElement = document.getElementById("loading-wrapper");
        loadingElement.style.opacity = '0';
        // If you want to remove it from the page after the fadeout
        loadingElement.addEventListener('transitionend', () => this.loading = false);
        //
        
      };
      image.src =
        "https://res.cloudinary.com/djebet1qh/image/upload/v1590983580/ecard/_TAL1997.jpg";
        // "https://res.cloudinary.com/djebet1qh/image/upload/v1590983580/ecard/ecard-bg.jpg";
    }, 1000);
  }
};
</script>
<style>
#loading-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: white;
  transition: opacity 0.5s;
}

#loading-text {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  color: rgb(20, 121, 60);
  width: 100px;
  height: 30px;
  margin: -7px 0 0 -45px;
  text-align: center;
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 20px;
}

#loading-content {
  display: block;
  position: relative;
  left: 50%;
  top: 50%;
  width: 170px;
  height: 170px;
  margin: -85px 0 0 -85px;
  border: 3px solid #f00;
}

#loading-content {
  border: 3px solid transparent;
  border-top-color: rgb(121, 61, 185);
  border-bottom-color: rgb(121, 61, 185);
  border-radius: 50%;
  -webkit-animation: loader 2s linear infinite;
  -moz-animation: loader 2s linear infinite;
  -o-animation: loader 2s linear infinite;
  animation: loader 2s linear infinite;
}

@keyframes loader {
  0% {
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>
