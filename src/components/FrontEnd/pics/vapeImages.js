import React from "react";

function vapeImages(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = vapeImages(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

<img alt="Images" src={images["doggy.png"]} />;
//! ----------------------------------------------------------------

// function vapeImages() {
//   <img src="../pics" alt="vapes" />;
// }

// export default vapeImages;
