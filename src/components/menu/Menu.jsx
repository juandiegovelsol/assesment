import React from "react";

import "./menu.scss";

const Menu = ({ button_left = <></>, title = "", button_rigth = <></> }) => {
  return (
    <section className="menu">
      {button_left}
      <h2>{title}</h2>
      {button_rigth}
    </section>
  );
};

export default Menu;
