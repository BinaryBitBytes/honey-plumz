import React, { createContext, useContext, useEffect, useState } from 'react';

const MyContext = createContext();

export function MyContextProvider({ children }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const importImages = async () => {
      const contextImages = [];
      const imageFiles = require.context("../pics", false, /\.jpg$/);

      imageFiles.keys().forEach((imagePath) => {
        const imageName = imagePath.substring(2); // Remove './' from the beginning
        const imageSrc = imageFiles(imagePath);

        contextImages.push({ src: imageSrc, alt: imageName });
      });

      setImages(contextImages);
    };

    importImages();
  }, []);

  const value = {
    images,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export function useMyContext() {
  return useContext(MyContext);
}
