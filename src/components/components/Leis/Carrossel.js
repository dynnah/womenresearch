import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";


function Carrossel() {
  return (
    <div className="App">
      <Carousel>
        <Item>
          <h1>Fisica</h1>
        </Item>
        <Item>
          <h1>Psicológica</h1>
        </Item>
        <Item>
          <h1>Moral</h1>
        </Item>
        <Item>
          <h1>Sexual</h1>
        </Item>
        <Item>
          <h1>Patriomonial</h1>
        </Item>
      </Carousel>
    </div>
  );
}

export default Carrossel
