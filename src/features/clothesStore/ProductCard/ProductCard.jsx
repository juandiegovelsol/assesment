import React, { useEffect, useState } from "react";
import { useTimer } from "use-timer";
import "./product-card.scss";

const ProductCard = ({ title = "", image = "", id = 0, handleClick }) => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [timeUp, setTimeUp] = useState("able");
  const [buttonText, setButtonText] = useState("Go to Detail");
  const random = Math.floor(Math.random() * 10) + 1;

  const { time, start } = useTimer({
    initialTime: random * 60,
    timerType: "DECREMENTAL",
    endTime: 0,
  });

  const addCero = (remaining) => {
    return Math.trunc(remaining / 10) === 0 ? `0${remaining}` : `${remaining}`;
  };

  const redirect = (time) => {
    if (time !== 0) {
      handleClick(id);
    }
  };

  useEffect(() => {
    start();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const calculate_minutes = Math.trunc(time / 60);
    setMinutes(calculate_minutes);
    const calculate_seconds = time % 60;
    setSeconds(calculate_seconds);
    if (time === 0) {
      setTimeUp("unable");
      setButtonText("Unavailable");
    }
  }, [time]);

  return (
    <article className="product-card" key={id}>
      <span className="product-card__image">
        <img src={image} alt="Product card" />
      </span>
      <h2 className="product-card__title">{title}</h2>
      <span className="product-card__footer">
        <p>
          {addCero(minutes)}:{addCero(seconds)}
        </p>
        <p>Article #{id}</p>
        <button
          className={`product-card__button ${timeUp}`}
          onClick={() => {
            redirect(time);
          }}
        >
          {buttonText}
        </button>
      </span>
    </article>
  );
};

export default ProductCard;
