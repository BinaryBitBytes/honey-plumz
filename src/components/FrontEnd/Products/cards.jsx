import React from "react";
import { useMyContext } from "../UX/context.jsx";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

function Cards() {
  const { images } = useMyContext();

  return (
    <div className="card-container">
      {images.map((image, index) => (
        <div key={index} className="card">
          <img src={image.src} alt={image.alt} />
          <div className="card-info">
            <h3>{image.title}</h3>
            <p>{image.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CardsWithBoundary() {
  return (
    <ErrorBoundary>
      <Cards />
    </ErrorBoundary>
  );
}
