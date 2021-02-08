import React, { Component } from "react";
import ProductList from "./ProductList";
import phoneData from "../../data/phoneData.json";
import ModalGioHang from "./ModalGioHang";
export default class BaiTapTruyenProp2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gioHang: [],
    };
  }

  themGioHang = (sanPham) => {
    // B1 từ sản phẩm được chon tạo ra 1 sản phẩm giỏ hàng
    //Sử dụng cách này tránh trường hợp khi xóa n sản phẩm, khi thêm vào lại thêm n sản phẩm
    let spGioHang = {
        maSP: sanPham.maSP,
        tenSP: sanPham.tenSP,
        soLuong: sanPham.soLuong,
        giaBan: sanPham.giaBan,
        hinhAnh: sanPham.hinhAnh,
      },
     gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === spGioHang.maSP);
    //Product exsited in card
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    }
    //Product is not exsit in card
    else {
      gioHangCapNhat.push(spGioHang);
    }
    //Call setState to set value of card
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  tangGiamSoLuong = (sanPham, tangGiam) => {
    var gioHangCapNhat = [...this.state.gioHang];

    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === sanPham.maSP);

    if (tangGiam) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      if (gioHangCapNhat[index].soLuong > 1) {
        gioHangCapNhat[index].soLuong -= 1;
      }
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  xoaGioHang = (sanPham) => {
    //Kiem tra có sản phẩm trong giỏ hàng k
    // var gioHangCapNhat = [...this.state.gioHang];

    // let index = gioHangCapNhat.findIndex((sp) => sp.maSP === sanPham.maSP);

    // if (index !== -1) {
    //   gioHangCapNhat.splice(index, 1);
    // }
   var  gioHangCapNhat= this.state.gioHang.filter(sp => sp.maSP !== sanPham.maSP);

    this.setState({
      gioHang: gioHangCapNhat,
    });
  };
  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl, sp, index) => {
      return (tsl += sp.soLuong);
    }, 0);
    return (
      <div className="container">
        <h3 className="text-center">Bai Tap Truyen Prop</h3>
        <div className="text-right">
          {" "}
          <span
            className="text-danger"
            style={{ cursor: "pointer" }}
            data-toggle="modal"
            data-target="#modelId"
          >
            Gio Hang ({tongSoLuong})
          </span>
        </div>
        <ProductList mangSanPham={phoneData} themGioHang={this.themGioHang} />
        <ModalGioHang
          gioHang={this.state.gioHang}
          xoaGioHang={this.xoaGioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
        />
      </div>
    );
  }
}
