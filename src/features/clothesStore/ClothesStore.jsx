import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectClothesStore, getClothesAsync } from "./clothesStoreSlice";
import "./clothes-store.scss";
const ClothesStore = () => {
  const dispatch = useDispatch();
  const { loading, list: products } = useSelector(selectClothesStore);

  useEffect(() => {
    dispatch(getClothesAsync());
  }, []);

  if (loading) return <h1>Loading Component</h1>;

  return (
    <section className="clothes-store">
      <h1 className="clothes-store__title">Juan Diego's Clothing Store</h1>
      <hr />
      <div className="clothes-store__store">
        {products.map((item, index) => {
          const { title, image } = item;
          return (
            <article className="product-card" key={index}>
              <span className="product-card__image">
                <img src={image} alt="Product card" />
              </span>
              <h2 className="product-card__title">{title}</h2>
              <span className="product-card__footer">
                <p>Timer</p>
                <p># {index + 1}</p>
                <button>Details</button>
              </span>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ClothesStore;
