import React, { Component } from "react";

export default class ProductItemCar extends Component {
  render() {
    const { id, name, price, img } = this.props.car;
    return (
      <div>
        <div className="card  " style={{ width: "18rem" }}>
          <img className="card-img-top" src={img} alt="car" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>

            <a
              href="abc"
              className="btn btn-success"
              data-toggle="modal"
              data-target="#exampleModalCenter"
              onClick={() => {
                this.props.setStateModal(this.props.car);
              }}
            >
              Detail
            </a>
          </div>
        </div>
      </div>
    );
  }
}
