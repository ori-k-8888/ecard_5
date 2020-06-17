<template>
  <ecard-layout>
    <div
      class="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover">
      <!--===============================================================================================-->
      <div id="loading-wrapper"  class="opacity-100">
        <div id="loading-text">{{$page.ecard.company}}</div>
        <div id="loading-content"></div>
      </div>
      <!--===============================================================================================-->
      <div id="page-content" class="opacity-0">
         <div  class="max-w-4xl flex items-center h-auto flex-wrap mx-auto my-32">
        <!--Main Col-->
        <div id="profile" class="w-full shadow-2xl bg-white opacity-75 mx-6 rounded-lg">
          <div class="p-4 text-center">
            <!-- Image for mobile view-->
            <div
              class="block rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              :style="mobileImage"
            ></div>

            <h1 class="text-3xl font-bold pt-8 flex justify-center">{{$page.ecard.name}}</h1>

            <div class="mx-auto w-4/5 pt-3 border-b-2 border-teal-500 opacity-25"></div>
            <p class="pt-4 text-base font-bold flex items-center justify-center">
              {{$page.ecard.occupation}}&nbsp;
              <svg
                class="h-4 fill-current text-teal-700 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"
                />
              </svg>
            </p>
            <p class="pt-2 text-gray-600 text-xs flex items-center justify-center">
              <button v-if="waze" @click="navigateWaze(waze)">
                <svg
                  class="h-3 fill-current text-teal-700 pr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M13.314 1.59c-.225.003-.45.013-.675.03-2.165.155-4.295.924-6.069 2.327-2.194 1.732-3.296 4.325-3.496 7.05h.002c-.093 1.22-.23 2.15-.469 2.63-.238.479-.42.638-1.24.639C.27 14.259-.4 15.612.266 16.482c1.248 1.657 2.902 2.705 4.72 3.364a2.198 2.198 0 00-.033.367 2.198 2.198 0 002.2 2.197 2.198 2.198 0 002.128-1.668c1.307.12 2.607.14 3.824.1.364-.012.73-.045 1.094-.092a2.198 2.198 0 002.127 1.66 2.198 2.198 0 002.2-2.197 2.198 2.198 0 00-.151-.797 12.155 12.155 0 002.303-1.549c2.094-1.807 3.511-4.399 3.302-7.404-.112-1.723-.761-3.298-1.748-4.608-2.143-2.86-5.53-4.309-8.918-4.265zm.366 1.54c.312.008.623.027.933.063 2.48.288 4.842 1.496 6.4 3.577v.001c.829 1.1 1.355 2.386 1.446 3.792v.003c.173 2.477-.965 4.583-2.777 6.147a10.66 10.66 0 01-2.375 1.535 2.198 2.198 0 00-.98-.234 2.198 2.198 0 00-1.934 1.158 9.894 9.894 0 01-1.338.146 27.323 27.323 0 01-3.971-.148 2.198 2.198 0 00-1.932-1.156 2.198 2.198 0 00-1.347.463c-1.626-.553-3.078-1.422-4.155-2.762 1.052-.096 1.916-.6 2.319-1.408.443-.889.53-1.947.625-3.198v-.002c.175-2.391 1.11-4.536 2.92-5.964h.002c1.77-1.402 3.978-2.061 6.164-2.012zm-3.157 4.638c-.688 0-1.252.579-1.252 1.298 0 .72.564 1.297 1.252 1.297.689 0 1.252-.577 1.252-1.297 0-.711-.563-1.298-1.252-1.298zm5.514 0c-.688 0-1.25.579-1.25 1.298-.008.72.554 1.297 1.25 1.297.688 0 1.252-.577 1.252-1.297 0-.711-.564-1.298-1.252-1.298zM9.641 11.78a.72.72 0 00-.588.32.692.692 0 00-.11.54c.345 1.783 2.175 3.129 4.264 3.129h.125c1.056-.032 2.026-.343 2.816-.922.767-.556 1.29-1.316 1.477-2.137a.746.746 0 00-.094-.547.69.69 0 00-.445-.32.714.714 0 00-.867.539c-.22.93-1.299 1.9-2.934 1.94-1.572.046-2.738-.986-2.926-1.956a.72.72 0 00-.718-.586z"
                  />
                </svg>
              </button>
              {{$page.ecard.location}}&nbsp;&nbsp;
              <svg
                class="h-4 fill-current text-teal-700 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"
                />
              </svg>
            </p>
            <div class="mt-4 text-gray-800 text-xl flex items-center justify-center">
              <p dir="rtl">{{$page.ecard.description}}</p>
            </div>

            <div class="pt-12 pb-8">
              <p class="pt-4 pb-1 text-base font-bold flex items-center justify-center">{{$page.ecard.howtoconnect}}</p>
              <div class="flex flex-wrap items-center justify-center">
                <button
                  class="flex items-center relative shadow bg-teal-700 hover:bg-teal-900 pt-2 pb-2 pl-4 pr-4 text-white rounded-full mr-2"
                  v-if="$page.ecard.whatsapp.number"
                  @click="sendWhatsappMessage($page.ecard.whatsapp)"
                >
                  <svg
                    class="h-4 fill-current text-gray-100"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                    />
                  </svg>
                </button>

                <a :href="mobileNumber">  
                  <button
                  class="flex items-center relative shadow bg-teal-700 hover:bg-teal-900 pt-2 pb-2 pl-4 pr-4 text-white rounded-full"
                >   
                    <svg 
                      class="h-4 fill-current text-gray-100"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"><path d="M20 18.35V19a1 1 0 01-1 1h-2A17 17 0 010 3V1a1 1 0 011-1h4a1 1 0 011 1v4c0 .56-.31 1.31-.7 1.7L3.16 8.84c1.52 3.6 4.4 6.48 8 8l2.12-2.12c.4-.4 1.15-.71 1.7-.71H19a1 1 0 01.99 1v3.35z"/>
                    </svg>
                </button></a>
              </div>
            </div>

            <div class="mt-6 pb-16 w-4/5 mx-auto flex flex-wrap items-center justify-around">
              <a
                class="link"
                target="_blank"
                rel="noopener noreferrer"
                v-bind:href="facebook"
                v-if="facebook"
              >
                <svg
                  class="h-6 fill-current text-gray-600 hover:text-teal-700"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Facebook</title>
                  <path
                    d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0"
                  />
                </svg>
              </a>
              <a
                class="link"
                target="_blank"
                rel="noopener noreferrer"
                v-bind:href="twitter"
                v-if="twitter"
              >
                <svg
                  class="h-6 fill-current text-gray-600 hover:text-teal-700"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Twitter</title>
                  <path
                    d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
                  />
                </svg>
              </a>
              <a
                class="link"
                target="_blank"
                rel="noopener noreferrer"
                v-bind:href="instagram"
                v-if="instagram"
              >
                <svg
                  class="h-6 fill-current text-gray-600 hover:text-teal-700"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path
                    d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                  />
                </svg>
              </a>
              <a
                class="link"
                target="_blank"
                rel="noopener noreferrer"
                v-bind:href="youtube"
                v-if="youtube"
              >
                <svg
                  class="h-6 fill-current text-gray-600 hover:text-teal-700"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <title>YouTube</title>
                  <path
                    d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
     
    </div>
  </ecard-layout>
</template>

<page-query>
query Ecard ($path: String){
  ecard: ecard (path: $path) {
    path
    company
    name
    occupation
    location
    description
    howtoconnect
    mobile
    images {
      mobile
      bg
    }
    facebook
    twitter
    youtube
    instagram
    waze
    whatsapp {
      number
      msg
    }
  }
}
</page-query>

<script>
import EcardLayout from "../layouts/EcardLayout.vue";
export default {
  components: {
    EcardLayout
  },
  metaInfo() {
    return {
      title: this.$page.ecard.name,
      meta: [
        {
          key: "keywords",
          property: "keywords",
          content: `${this.$page.ecard.occupation}`
        },
        { key: "og:type", property: "og:type", content: "Business eCard" },
        {
          key: "og:title",
          property: "og:title",
          content: this.$page.ecard.name
        },
        {
          key: "description",
          name: "description",
          content: this.$page.ecard.occupation
        },
        { key: "og:url", property: "og:url", content: this.$page.ecard.path },
        {
          key: "og:image",
          property: "og:image",
          content: `https://res.cloudinary.com/djebet1qh/image/upload/ar_1:1,bo_0px_solid_rgb:fdfdfd,c_fill,g_auto,r_max,w_1000/v1590983580/ecard/${this.$page.ecard.images.mobile}`
        }
      ]
    };
  },
  computed: {
    mobileImage() {
      return {
        "background-image": `url(https://res.cloudinary.com/djebet1qh/image/upload/ar_1:1,bo_0px_solid_rgb:fdfdfd,c_fill,g_auto,r_max,w_1000/v1590983580/ecard/${this.$page.ecard.images.mobile})`
      };
    },
    mobileNumber() {
      return `tel:${this.$page.ecard.mobile}`;
    },
    facebook() {
      return `${this.$page.ecard.facebook}`;
    },
    twitter() {
      return `${this.$page.ecard.twitter}`;
    },
    youtube() {
      return `${this.$page.ecard.youtube}`;
    },
    instagram() {
      return `${this.$page.ecard.instagram}`;
    },
    waze() {
      return `${this.$page.ecard.waze}`;
    },
    firstName() {
      return `${this.$page.ecard.name}`;
    }
  },
  methods: {
    sendWhatsappMessage: whatsapp => {
      const whatsappMsg = whatsapp.msg.replace(/ /g, "%20");
      const whatsappNumber = whatsapp.number;
      const target = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${whatsappMsg}`;
      window.open(target);
    },
    navigateWaze: wazeLink => {
      window.open(wazeLink);
    }
  },
  mounted() {

    const image = new Image();
    image.onload = () => {
      const body = document.getElementsByTagName("body")[0];
      // adding styles to loag BG image after load
      body.classList.add("h-screen", "w-full", "bg-cover");
      body.style.backgroundImage = `url(${image.src})`;
      body.style.backgroundRepeat = "no-repeat";
      body.style.backgroundPosition = "center center";
      //changing opacity to create transition effect
      const loadingElement = document.getElementById("loading-wrapper");
      loadingElement.style.opacity = "0";
      const contentElement = document.getElementById("page-content");
      // If you want to remove it from the page after the fadeout
      loadingElement.addEventListener(
        "transitionend",
        () => {
          this.loading = false
          contentElement.style.opacity = "100";
          }
      );
      //
    };
    image.src =
      `https://res.cloudinary.com/djebet1qh/image/upload/v1590983580/ecard/${this.$page.ecard.images.bg}`;
   // }, 1000);
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

#page-content {
  transition: opacity 0.25s;
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

