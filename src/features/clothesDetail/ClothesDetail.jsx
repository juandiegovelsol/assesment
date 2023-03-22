import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectClothesDetail, getOneProductAsync } from "./clothesDetailSlice";
import { selectClothesStore } from "../clothesStore/clothesStoreSlice";
import { useParams } from "react-router-dom";
import "./clothes-detail.scss";

const ClothesDetail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const { loader, product: productAsync } = useSelector(selectClothesDetail);
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

  const redirect = (route) => {
    navigate(`/${route}`);
  };

  if (loader) return <p>Loader component</p>;

  return (
    <div className="product-details">
      <div className="product-details__nav-bar">
        <button
          className="product-details__button"
          onClick={() => redirect("")}
        >
          Return to Store
        </button>
        <h2 className="product-details__title">Product detail</h2>
        <button
          className="product-details__button"
          onClick={() => redirect("about")}
        >
          Go to About
        </button>
      </div>
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
              <strong>Price:</strong>${product.price || productAsync.price}
            </p>
          </span>
        </article>
        {/* <p>
          Rated: {product.rating.rate || productAsync.rating.rate}/5.0 from{" "}
          {product.rating.count || productAsync.rating.count} opinions
        </p>
        {console.log(productAsync.rating.rate)} */}
      </section>
    </div>
  );
};

export default ClothesDetail;
