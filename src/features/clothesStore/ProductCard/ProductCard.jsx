import React from "react";
import "./product-card.scss";

const ProductCard = ({ title = "", image = "", id = 0 }) => {
  return (
    <article className="product-card" key={id}>
      <span className="product-card__image">
        <img src={image} alt="Product card" />
      </span>
      <h2 className="product-card__title">{title}</h2>
      <span className="product-card__footer">
        <p>Timer</p>
        <p>Article #{id}</p>
        <button className="product-card__button">Go to Details</button>
      </span>
    </article>
  );
};

export default ProductCard;
