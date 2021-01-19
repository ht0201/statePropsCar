import React, { Component } from "react";
import ModalCar from "./ModalCar";

import ProductListCar from "./ProductListCar";
const products = [
  {
    id: 1,
    name: "black car",
    img: "./img-product/black-car.jpg",
    price: 1000,
  },

  {
    id: 2,
    name: "red car",
    img: "./img-product/red-car.jpg",
    price: 2000,
  },

  {
    id: 3,
    name: "silver car",
    img: "./img-product/silver-car.jpg",
    price: 3000,
  },

  {
    id: 3,
    name: "Steel car",
    img: "./img-product/steel-car.jpg",
    price: 4000,
  },
];
export default class ExerciseCarStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: {
        id: 3,
        name: "Steel car",
        img: "./images/products/steel-car.jpg",
        price: 4000,
      },
    };
  }

  setStateModal = (car) => {
    this.setState({
      productDetail: car,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <ModalCar content={this.state.productDetail} />
        </div>
        <ProductListCar
          productsData={products}
          setStateModal={this.setStateModal}
        />
      </div>
    );
  }
}
