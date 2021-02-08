import React, { Component } from "react";
import SanPhamGioHang from "./SanPhamGioHang";

class DanhSachSanPham extends Component {
  render() {
    const { mangSanPham,themGioHang } = this.props;
    return (
      <div className="container">
        <div className="row">
          {mangSanPham.map((sanPham, index) => {
            return (
              <div className="col-4" key={index}>
                <SanPhamGioHang sanPham={sanPham} themGioHang={themGioHang} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default DanhSachSanPham;
