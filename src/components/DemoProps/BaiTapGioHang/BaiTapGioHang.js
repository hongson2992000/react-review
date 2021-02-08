import React, { Component } from "react";
import ModalGioHang from "./ModalGioHang";
import DanhSachSanPhamGioHang from "./DanhSachSanPhamGioHang";
import phoneData from "./../../../data/phoneData.json";

class BaiTapGioHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gioHang: [],
    };
  }
  //lấy dữ liệu tại componentBaiTap

  themGioHang = (sanPhamChon) => {
    //B1; từ sp được chọn tạo ra sp giỏ hàng
    let spGioHang = {
      maSP: sanPhamChon.maSP,
      tenSP: sanPhamChon.tenSP,
      giaBan: sanPhamChon.giaBan,
      hinhAnh: sanPhamChon.hinhAnh,
      soLuong: 1,
    };
    //Kiểm tra SpChon có trong giỏ hàng chưa
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === spGioHang.maSP);
    //Sản phẩm được click đã có trong this.state.gioHang
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
      //Sản phẩm chưa có
    } else {
      gioHangCapNhat.push(spGioHang);
    }

    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  //Đặt sự kiện xóa giỏ hàng tại BTGioHang

  xoaGioHang = (maSP) => {
    //Tìm trong giỏ hàng có sp chứa maSP được click thì xóa
    // var gioHangCapNhat = [...this.state.gioHang];
    // let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    // if (index !== -1) {
    //   gioHangCapNhat.splice(index, 1);
    // }

    //Cách 2 dùng filter lấy ra những sp có maSP khác maSP được truyền vào
    var gioHangCapNhat = this.state.gioHang.filter((sp) => sp.maSP !== maSP);
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  tangGiamSoLuong = (maSP, tangGiam) => {
    var gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
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
  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl, spGH, index) => {
      return (tsl += spGH.soLuong);
    }, 0);

    return (
      <div className="container">
        <h3 className="text-center text-success">Bài tập giỏ hàng</h3>
        <div className="text-right">
          <span
            className="text-danger"
            style={{ cursor: "pointer" }}
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ Hàng({tongSoLuong})
          </span>
        </div>
        <ModalGioHang
          tangGiamSoLuong={this.tangGiamSoLuong}
          gioHang={this.state.gioHang}
          xoaGioHang={this.xoaGioHang}
        />
        <DanhSachSanPhamGioHang
          mangSanPham={phoneData}
          themGioHang={this.themGioHang}
        />
      </div>
    );
  }
}

export default BaiTapGioHang;
