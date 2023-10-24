// const fs = require('fs');
import path from 'path'
// import * as fs from 'fs';
// import * as fs from 'node:fs';
import  *  as fs from "node:fs";
const rootFolder = '../../../../src/components/FrontEnd/pics'; // Replace with your root folder path
// const rootFolder = '../../src/components/FrontEnd/pics'; // Replace with your root folder path
const imageFiles = [];

function findImages(directory) {
  const files = fs.readdirSync(directory);
  files.forEach((file) => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      findImages(filePath); // Recursive call for subdirectories
    } else if (['.jpg', '.jpeg', '.png', '.gif'].includes(path.extname(file).toLowerCase())) {
      imageFiles.push(filePath);
    }
  });
}

findImages(rootFolder);
console.log(imageFiles);

export default findImages(imageFiles);