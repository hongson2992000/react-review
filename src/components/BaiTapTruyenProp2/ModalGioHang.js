import React, { Component } from "react";

export default class ModalGioHang extends Component {
  renderGioHang = () => {
    let { gioHang, xoaGioHang, tangGiamSoLuong } = this.props;
    return gioHang.map((sanPham, index) => {
      return (
        <tr key={index}>
          <td>{sanPham.maSP}</td>
          <td>
            <img src={sanPham.hinhAnh} width={40} height={50} />
          </td>
          <td>{sanPham.tenSP}</td>

          <td>
            {" "}
            <button
              className="btn btn-primary"
              onClick={() => tangGiamSoLuong(sanPham, true)}
            >
              +
            </button>
            {sanPham.soLuong}{" "}
            <button
              className="btn btn-primary"
              onClick={() => tangGiamSoLuong(sanPham, false)}
            >
              -
            </button>
          </td>

          <td>{sanPham.giaBan}</td>
          <td>{sanPham.soLuong * sanPham.giaBan}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => xoaGioHang(sanPham)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div
            className="modal-content"
            style={{ width: "800px", maxWidth: "800px" }}
          >
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <td>Ma San Pham</td>
                    <td>Hình Ảnh</td>
                    <td>Ten San Pham</td>
                    <td>So Luong</td>
                    <td>Don Gia</td>
                    <td>Thanh Tien</td>
                  </tr>
                </thead>
                <tbody>{this.renderGioHang()}</tbody>
                <tfoot>
                  <td colSpan="5"></td>
                  <td>Tong Tien</td>
                  <td>
                    {this.props.gioHang.reduce((tongTien, sanPham, index) => {
                      return (tongTien += sanPham.soLuong * sanPham.giaBan);
                    },0)}
                  </td>
                </tfoot>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
