<template>
  <div>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  /* background-image:url('https://res.cloudinary.com/djebet1qh/image/upload/v1590983580/ecard/ecard-bg.jpg');*/
  background-color: black;
}
</style>
