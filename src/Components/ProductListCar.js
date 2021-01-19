import React, { Component } from "react";

import ProductItemCar from "./ProductItemCar";

export default class ProductListCar extends Component {
  productsData = () => {
    return this.props.productsData.map((car, index) => {
      return (
        <div className="col-3">
          <ProductItemCar
            car={car}
            key={index}
            setStateModal={this.props.setStateModal}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h2>Danh sach xe</h2>
        <div className="row">{this.productsData()}</div>
      </div>
    );
  }
}
