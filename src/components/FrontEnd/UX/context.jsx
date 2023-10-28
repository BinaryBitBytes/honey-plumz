import React, { createContext, useContext, useEffect, useState } from 'react';

// Create a context
const MyContext = createContext();

// Create a provider component
export function MyContextProvider({ children }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Function to import all .jpg images from the pics folder
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
    // Add other context values/functions as needed
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

// Create a custom hook for using the context
export function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
}





//!---------------------------------------------!//
// // MyContext.js (Context definition)
// import React, { createContext, useContext } from 'react';
// import vapeImages from "../pics/vapeImages.js";

// // Create a context
// const MyContext = createContext();

// // Create a provider component
// export function MyContextProvider({ children }) {
//   // Define your context state and functions here
//   const value = {
//     // Your context values here
//   };

//   return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
// }

// // Create a custom hook for using the context
// export function useMyContext() {
//   return useContext(MyContext);
// }

//! ---------------------------------------------!
// import { createContext, useState } from "react";

// const MyContext = createContext();

// export function MyContextProvider({ children }) {
//   const [contextValue, setContextValue] = useState(/* initial value */);

//   return (
//     <MyContext.Provider value={{ contextValue, setContextValue }}>
//       {children}
//     </MyContext.Provider>
//   );
// }