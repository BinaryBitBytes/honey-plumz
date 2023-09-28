import React, { useState, useEffect } from "react";
import vapeImages from "../pics/vapeImages.js";

// cards are used for the products
// each card will access a file in the public/style folder
// each product is sub-categorized in its respected folder based on chemical makup
function Cards() {
  const [images, setImages] = useState(vapeImages);

  // You can update the images whenever `vapeImages` changes
  useEffect(() => {
    setImages(vapeImages);
  }, [vapeImages]);

  return (
    <div className="card-container">
      {images.map((image, index) => (
        <div key={index} className="card">
          <img src={image.src} alt={`Vape ${index + 1}`} />
          <div className="card-info">
            <h3>{image.title}</h3>
            <p>{image.description}</p>
            {/* You can add more information about each product */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
