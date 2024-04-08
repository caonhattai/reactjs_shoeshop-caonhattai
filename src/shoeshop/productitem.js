import React, { Component } from "react";

export default class ProductItem extends Component {
  handleDetailProduct = () => {
    this.props.setModalState(this.props.item);
  };

  render() {
    const { item } = this.props;
    return (
      <div className="card col-md-3 m-4">
        <img className="card-img-top" src={item.image} alt="Card image" />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text">{item.price} $</p>
          <button href="#" className="btn btn-primary">
            Add cart
          </button>
          <button
            type="button"
            className="btn btn-success"
            data-toggle="modal"
            data-target="#myModal"
            onClick={this.handleDetailProduct}
          >
            Detail
          </button>
        </div>
      </div>
    );
  }
}
