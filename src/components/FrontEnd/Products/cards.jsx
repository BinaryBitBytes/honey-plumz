// import React, { useState } from 'react';

// Possible Technology for reading files below:
// (1) // import { readFileSync } from "fs"
import vapeImages from '../pics/vapeImages.js';

// cards are used for the products
// each card will access a file in the public/style folder
// each product is sub-categorized in its respected folder based on chemical makup

function Cards() {
    return (
      <div>
        <div>
          {vapeImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Vape ${index + 1}`} />
              {/* You can add more information about each product */}
            </div>
          ))}
        </div>
      </div>
    );
  }

export default Cards;
