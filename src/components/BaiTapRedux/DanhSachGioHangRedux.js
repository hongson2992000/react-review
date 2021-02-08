import React, { Component } from "react";
import dataPhone from "../../data/phoneData.json";
import SanPhamRedux from "./SanPhamRedux";

export default class DanhSachGioHangRedux extends Component {
  //Viết phương thức render sanPham
  renderSanPham = () => {
    return dataPhone.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPhamRedux sanPham={sanPham} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderSanPham()}</div>
      </div>
    );
  }
}
