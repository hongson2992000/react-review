import React, { Component } from "react";
import ModalGioHangRedux from "./ModalGioHangRedux";
import DanhSachGioHangRedux from "./DanhSachGioHangRedux";

export default class BTGioHangRedux extends Component {
  render() {
    return (
      <div className="container">
          <h3>Hello</h3>
        <ModalGioHangRedux />
        <DanhSachGioHangRedux />
      </div>
    );
  }
}
