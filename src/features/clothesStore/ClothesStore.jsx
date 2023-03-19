import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectClothesStore, getClothesAsync } from "./clothesStoreSlice";
import { ProductCard } from "./ProductCard";
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
        {console.log("Prooducts...", products)}
        {products.map((item, index) => {
          const { title, image, id } = item;
          return (
            <>
              <ProductCard title={title} image={image} id={id} />
            </>
          );
        })}
      </div>
    </section>
  );
};

export default ClothesStore;
