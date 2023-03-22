import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectClothesStore, getClothesAsync } from "./clothesStoreSlice";
import { setProductDetail } from "../clothesDetail/clothesDetailSlice";
import { ProductCard } from "./ProductCard";
import "./clothes-store.scss";
const ClothesStore = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, list: products } = useSelector(selectClothesStore);

  useEffect(() => {
    dispatch(getClothesAsync());
  }, []);

  const goToDetails = (id, item) => {
    navigate(`/detail/${id}`);
  };
  if (loading) return <h1>Loading Component</h1>;

  return (
    <section className="clothes-store">
      <h1 className="clothes-store__title">Juan Diego's Clothing Store</h1>
      <hr />
      <div className="clothes-store__store">
        {products.map((item, index) => {
          const { title, image, id } = item;
          return (
            <div key={id}>
              <ProductCard
                title={title}
                image={image}
                id={id}
                item={item}
                handleClick={goToDetails}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ClothesStore;
