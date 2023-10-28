import React from "react";
import CardsWithBoundary from "../FrontEnd/Products/cards.jsx";
import Products from "../FrontEnd/Products/products.jsx";

function BODY() {
  return (
      <section className="body">
        <div className="cards">
          <CardsWithBoundary />
        </div>
        <div className="Products">
          <Products />
        </div>
      </section>
  );
}

export default BODY;
