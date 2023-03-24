import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectClothesStore, getClothesAsync } from "./clothesStoreSlice";
import { ProductCard } from "./ProductCard";
import { Menu } from "../../components/menu";
import { CustomButton } from "../../components/customButton";
import "./clothes-store.scss";

const ClothesStore = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, list: products } = useSelector(selectClothesStore);

  useEffect(() => {
    if (!products.length) {
      dispatch(getClothesAsync());
    }
    // eslint-disable-next-line
  }, []);

  const goToDetails = (id) => {
    navigate(`/detail/${id}`);
  };
  if (loading) return <h1>Loading Component</h1>;

  return (
    <section className="clothes-store">
      <Menu
        button_left={<CustomButton route="detail/1" text="Go to Details" />}
        title="Juan Diego's Clothing Store"
        button_rigth={<CustomButton route="about" text="Go to About" />}
      />
      <div className="clothes-store__store">
        {products.map((item) => {
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
