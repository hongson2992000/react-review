import React, { Component } from "react";
import data from "../../data/phoneData.json";
import SanPham from "./SanPhamRedux2";
export default class DanhSachSanPhamRedux2 extends Component {
  renderSanPham = () => {
    return data.map((sanPham, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham sanPham={sanPham} />
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
