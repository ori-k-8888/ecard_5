// This is the main.js file. Import global CSS and scripts here.
require('~/main.css')

// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  // Vue.component('Layout', DefaultLayout)
  // Add an external CSS file

  // Add a meta tag
  head.meta.push({
    "http-equiv": 'X-UA-Compatible',
    content: 'ie=edge'
  })
  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1.0'
  })
}
