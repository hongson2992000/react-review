import React, { Component } from "react";
import Header from "./Header";
import Slider from "./Slider";
import ProductList from "./ProductList";
import Modal from "./Modal";

export default class BaiTapChia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sanPhamModal: {
        maSP: 1,
        tenSP: "VinSmart Live",
        hinhAnh: "./img/sp_blackberry.png",
        giaBan: 5700000,
      },
    };
  }
  mangSanPham = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      hinhAnh: "./img/sp_blackberry.png",
      giaBan: 5700000,
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",

      hinhAnh: "./img/sp_iphoneX.png",
      giaBan: 7600000,
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      hinhAnh: "./img/sp_note7.png",
      giaBan: 27000000,
    },
    {
      maSP: 4,
      tenSP: "Iphone XS Max",
      hinhAnh: "./img/sp_vivo850.png",
      giaBan: 27000000,
    },
  ];
  xemChiTiet = (sanPhamChiTiet) => {
    console.log(sanPhamChiTiet);
    this.setState({
      sanPhamModal: sanPhamChiTiet,
    });
  };
  render() {
    return (
      <div>
        <Header />
        <Slider />

        <ProductList mangSanPham={this.mangSanPham} xemChiTiet={this.xemChiTiet} />
        <Modal sanPham={this.state.sanPhamModal} />
      </div>
    );
  }
}
