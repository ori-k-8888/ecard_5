// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config
const tailwind = require("tailwindcss");
const purgecss = require("@fullhuman/postcss-purgecss");

const postcssPlugins = [tailwind()];

if (process.env.NODE_ENV === "production")
  postcssPlugins.push(purgecss(require("./purgecss.config.js")));
// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "eCard",
  // siteDescription: "אנשים עובדים",
  titleTemplate: `%s | eCard`,
  icon: 'src/resparcIcon.jpeg',//'src/favicon.png',
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "ecard/**/*.md",
        typeName: "Ecard", // Ecard template to be used for MD rendering
        remark: {
          // remark options
        },
      },
    },
  ],
  transformers: {
    remark: {
      // global remark options
    },
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins,
      },
    },
  },
  // chainWebpack: config => {
  //   config.resolve.alias.set('@images', '@/assets/images')
  // },
};
