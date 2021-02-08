import React, { Component } from "react";
import Modal from "./ModalGioHangRedux2";
import DanhSachSanPham from "./DanhSachSanPhamRedux2";

export default class BaiTapGioHangRedux2 extends Component {
  render() {
    return (
      <div>
        <h3 className="text-center text-danger">Bai Tap Gio Hang Redux</h3>
        <Modal />
        <hr/>
        <DanhSachSanPham />
      </div>
    );
  }
}
