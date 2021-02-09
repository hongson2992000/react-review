import React, { Component } from "react";
import { connect } from "react-redux";
class TableSinhVien2 extends Component {
  renderTableSinhVien = () => {
    return this.props.mangSinhVien.map((sinhVien, index) => {
      return (
        <tr key={index}>
          <td>{sinhVien.maSV}</td>
          <td>{sinhVien.hoTen}</td>
          <td>{sinhVien.soDienThoai}</td>
          <td>{sinhVien.email}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead className="bg-dark text-white">
            <th>Mã SV</th>
            <th>Họ Tên</th>
            <th>Số DT</th>
            <th>Email</th>
          </thead>
          <tbody>{this.renderTableSinhVien()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangSinhVien: state.QuanLiSinhVienReducer.mangSinhVien,
  };
};

export default connect(mapStateToProps, null)(TableSinhVien2);
