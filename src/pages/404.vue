<template>
  <div class="flex items-center justify-center h-screen">
    <div class="text-4xl underline ">Page not found</div>
  </div>
</template>

<script>
export default {
  metaInfo() {
    return {
      title: "Not Found",
      bodyAttrs: {
        style: `background-image: url(https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=120);
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
                color: aliceblue;
                `
      }
    };
  }
};
</script>

