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
  });
  head.meta.push({
    name: 'viewport',
    content: 'width=device-width, initial-scale=1.0'
  });

  let copyRightNotice = `\u00a9 ReSpark, ${ new Date().getFullYear() }. All rights reserved`;

  head.meta.push(
    {
      name: 'author',
      content: 'ReSpark'
    },
    { name: 'copyright', content: copyRightNotice},
    // { key:"og:image", property: "og:image", content: 'https://geekiam.co.uk/assets/static/logo.png' },
    // { property: "og:site_name", content: 'ReSpark | eCard' }
    );
}
