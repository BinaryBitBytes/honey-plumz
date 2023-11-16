import React from "react";
import { useMyContext } from "../UX/context.jsx";
import CardsWithBoundary from "./cards.jsx";

function Products() {
  const { images } = useMyContext();

  return (
    <section>
      <h2>Here is our Product Selection</h2>
      <section className="cardStyle">
        {images.map((images, index) => (
          <div key={index} className="card">
            <h4 className="card-title">Title</h4>
            <div>
              <h6 className="card-subtitle text-muted">Subtitle</h6>
              <img src={images.src} alt={images.alt} />
            </div>
            <div className="card-body">
              <p className="card-text">Text</p>
              <a
                href="../../../../public/style/Pic/Vapes"
                className="card-link"
              >
                Link 1
              </a>
              <a
                href="../../../../public/style/Pic/Vapes"
                className="card-link"
              >
                Link 2
              </a>
            </div>
          </div>
        ))}
      </section>
      <div className="cards">
        <CardsWithBoundary />
      </div>
    </section>
  );
}

export default Products;
