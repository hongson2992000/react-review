import React, { Component } from "react";
//Ket noi vs redux

import { connect } from "react-redux";
class ModalGioHangRedux2 extends Component {
  renderGioHang = () => {
    return this.props.gioHang.map((spGioHang, index) => {
      return (
        <tr key={index}>
          <td>{spGioHang.maSP}</td>
          <td>
            <img src={spGioHang.hinhAnh} width={75} height={125} />
          </td>
          <td>{spGioHang.tenSP}</td>
          <td>
            <button
              className="btn btn-primary"
              onClick={() => this.props.tangGiamSoLuong(index, true)}
            >
              +
            </button>
            {spGioHang.soLuong}
            <button
              className="btn btn-primary"
              onClick={() => this.props.tangGiamSoLuong(index, false)}
            >
              -
            </button>
          </td>
          <td>{spGioHang.giaBan}</td>
          <td>{spGioHang.soLuong * spGioHang.giaBan}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.xoaGioHang(index)}
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Mã SP</th>
              <th>Hình Ảnh</th>
              <th>Tên SP</th>
              <th>So Luong</th>
              <th>Gia Ban</th>
              <th>Thanh Tien</th>
            </tr>
          </thead>
          <tbody>{this.renderGioHang()}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //state là store tổng => truy xuất tới gioHangReducer => biến state của store thành props
  return {
    gioHang: state.GioHangReducer.gioHang,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (index) => {
      const action = {
        type: "XOA_GIO_HANG",
        index,
      };
      dispatch(action);
    },
    tangGiamSoLuong: (index, tangGiam) => {
      const action = {
        type: "TANG_GIAM_GIO_HANG",
        index,
        tangGiam,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangRedux2);
