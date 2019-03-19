const withPlugins = require("next-compose-plugins");

const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");
const withOptimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [withTypescript],
  [withSass],
  [
    withOptimizedImages,
    {
      inlineImageLimit: 8192,
      imagesFolder: "images",
      imagesName: "[name]-[hash].[ext]",
      handleImages: ["jpeg", "png", "svg", "webp", "gif"],
      optimizeImages: false,
      optimizeImagesInDev: false
    }
  ]
]);
