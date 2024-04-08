import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    console.log(this.props);
    const { productDetail } = this.props;
    console.log(productDetail);
    return (
      <div id="myModal" className="modal fade" role="dialog">
        <div className="modal-dialog modal-lg">
          {/* Modal content*/}
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Detail Information</h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <div className="modal-body">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Quantity left</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{productDetail ? productDetail.name : ""}</td>
                    <td>{productDetail ? productDetail.description : ""}</td>
                    <td>{productDetail ? productDetail.price : ""}</td>
                    <td>{productDetail ? productDetail.quantity : ""}</td>
                    <td>
                      {productDetail ? productDetail.shortDescription : ""}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
