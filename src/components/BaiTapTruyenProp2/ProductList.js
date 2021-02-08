import React, { Component } from "react";
import phoneData from "../../data/phoneData.json";
import Product from "./Product";
export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chiTietSanPham: phoneData[1],
    };
  }

  renderSanPham = () => {
    let {themGioHang} =this.props;
    return phoneData.map((sp, index) => {
     return <Product key={index} sp={sp} xemChiTiet={this.xemChiTiet} themGioHang={themGioHang} />
    });
  };

  xemChiTiet = (sanPham) => {
    console.log(sanPham);

    this.setState({
      chiTietSanPham: sanPham,
    });
  };
  render() {
    let { chiTietSanPham } = this.state;
    return (
      <div className="container">
        <div className="row">{this.renderSanPham()}</div>
        <hr />
        <div className="row">
          <div className="col-6">
            <h3 className="text-center">San Pham</h3>
            <img src={chiTietSanPham.hinhAnh} />
          </div>
          <div className="col-6">
            <h3 className="text-center">Thong So Ki Thuat</h3>
            <table className="table">
              <tr>
                <th>Ten San</th>
                <th>{chiTietSanPham.tenSP}</th>
              </tr>
              <tr>
                <th>Ten San</th>
                <th>{chiTietSanPham.giaBan}</th>
              </tr>
              <tr>
                <th>Ten San</th>
                <th>{chiTietSanPham.heDieuHanh}</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
