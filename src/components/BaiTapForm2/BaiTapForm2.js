import React, { Component } from "react";
import FormSinhVien2 from "./FormSinhVien2";
import TableSinhVien2 from "./TableSinhVien2";
export default class BaiTapForm2 extends Component {
  render() {
    return (
      <div className="container">
        <h3>Bai Tap Form 2</h3>
        <FormSinhVien2 />
        <TableSinhVien2 />
      </div>
    );
  }
}
