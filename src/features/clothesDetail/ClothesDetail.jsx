import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectClothesDetail, getOneProductAsync } from "./clothesDetailSlice";
import { selectClothesStore } from "../clothesStore/clothesStoreSlice";
import { useParams } from "react-router-dom";
import { CustomButton } from "../../components/customButton";
import { Menu } from "../../components/menu";
import "./clothes-detail.scss";

const ClothesDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const { rating } = product || {};
  const { rate } = rating || 0;
  const { count } = rating || 0;
  const { loader, product: productAsync } = useSelector(selectClothesDetail);
  const { rating: ratingAsync } = productAsync || {};
  const { rate: rateAsync } = ratingAsync || 0;
  const { count: countAsync } = ratingAsync || 0;
  const { list: products } = useSelector(selectClothesStore);
  const { id: idParam } = useParams();

  useEffect(() => {
    const item = products.find((item) => item.id.toString() === idParam);
    if (item) {
      setProduct(item);
    } else {
      dispatch(getOneProductAsync(idParam));
    }
  }, []);

  if (loader) return <p>Loader component</p>;

  return (
    <div className="product-details">
      <Menu
        button_left={<CustomButton route="" text="Return to Store" />}
        title="Product Detail"
        button_rigth={<CustomButton route="about" text="Go to About" />}
      />
      <section className="product-details__details">
        <span className="product-title">
          <h2>{product.title || productAsync.title}</h2>
        </span>
        <article className="content">
          <span className="image">
            <img src={product.image || productAsync.image} alt="product" />
          </span>
          <span className="information">
            <p>
              <strong>Category: </strong>
              {product.category || productAsync.category}
            </p>
            <p>
              <strong>Description: </strong>
              {product.description || productAsync.description}
            </p>
            <p>
              <strong>Price: </strong>${product.price || productAsync.price}
            </p>
            <p>
              <strong>Rated:</strong> {rate || rateAsync}/5.0 from{" "}
              {count || countAsync} opinions
            </p>
          </span>
        </article>
      </section>
    </div>
  );
};

export default ClothesDetail;
