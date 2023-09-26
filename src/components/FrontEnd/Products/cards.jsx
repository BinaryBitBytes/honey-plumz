import React, { useState } from 'react';
// Possible Technology for reading files below:
// (1) // import { readFileSync } from "fs"
import pictures from '../../../../public/style/Pic/Vapes'

// cards are used for the products
// each card will access a file in the public/style folder
// each product is sub-categorized in its respected folder based on chemical makup

function Cards(pictures) {
  const [files, setFiles] = useState([]);

  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles([...files, ...selectedFiles]);
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <div>
        {files.map((file, index) => (
          <div key={index}>
            <h3>{file.name}</h3>
            <p>Size: {file.size} bytes</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
