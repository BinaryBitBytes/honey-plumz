import React, { useState, useEffect } from "react";
import vapeImages from "../pics/vapeImages.js";

// Define an ErrorBoundary component for error handling
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    // You can log the error or send it to an error tracking service here
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      // You can render a fallback UI when an error occurs
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

// cards are used for the products
// each card will access a file in the public/style folder
// each product is sub-categorized in its respected folder based on chemical makeup
function Cards() {
  const [images, setImages] = useState(vapeImages);

  // You can update the images whenever `vapeImages` changes
  useEffect(() => {
    setImages(vapeImages);
  }, []);

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

// Wrap your Cards component with the ErrorBoundary
export default function CardsWithBoundary() {
  return (
    <ErrorBoundary>
      <Cards />
    </ErrorBoundary>
  );
}
