import React from "react";
import { useNavigate } from "react-router-dom";
import "./custom-button.scss";

const CustomButton = ({ route = "", text = "" }) => {
  const navigate = useNavigate();
  const redirect = (route) => {
    navigate(`/${route}`);
  };
  return (
    <>
      <button className="custom-button" onClick={() => redirect(route)}>
        {text}
      </button>
    </>
  );
};

export default CustomButton;
