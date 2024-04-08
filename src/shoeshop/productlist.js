import React, { Component } from "react";
import ProductItem from "./productitem";

export default class ProductList extends Component {
  renderListShoe = () => {
    const { listShoe, setModalState } = this.props;
    return listShoe.map((item) => {
      return (
        <ProductItem key={item.id} item={item} setModalState={setModalState} />
      );
    });
  };
  render() {
    return <div className="row">{this.renderListShoe()}</div>;
  }
}
