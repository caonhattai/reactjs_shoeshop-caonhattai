import React, { Component } from "react";
import ProductList from "./productlist";
import Modal from "./modal";
import data from "./data.json";

export default class ShoeStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listShoe: data,
      productDetail: null,
    };
  }

  setModalState = (item) => {
    this.setState({
      productDetail: item,
    });
  };
  render() {
    const { productDetail } = this.state;
    return (
      <div className="container">
        <h1 className="text-center mb-5">Shoes Shop</h1>
        <ProductList
          listShoe={this.state.listShoe}
          setModalState={this.setModalState}
        />
        <Modal productDetail={productDetail} />
      </div>
    );
  }
}
