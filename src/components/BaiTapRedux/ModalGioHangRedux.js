import React, { Component } from "react";
import { connect } from "react-redux";
//Kết nối redux(connect hàm kết nối reactComponent-reduxStore)
class ModalGioHangRedux extends Component {
  renderGioHang = () => {
    //this.props.gioHang là thuộc tính nhận từ redux
    return this.props.gioHang.map((spGH, index) => {
      return (
        <tr key={index}>
          <td>{spGH.maSP}</td>
          <td>{spGH.tenSP}</td>
          <td>
            <img src={spGH.hinhAnh} width={75} height={125} />
          </td>
          <td>{spGH.giaBan}</td>
          <td>
            <button onClick={() => this.props.tangGiamSoLuong(index, true)}>
              +
            </button>
            {spGH.soLuong}
            <button onClick={() => this.props.tangGiamSoLuong(index, false)}>
              -
            </button>
          </td>
          <td>{spGH.soLuong * spGH.giaBan}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.props.xoaGioHangIndex(index)}
            >
              Xóa
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
              <td>Mã SP</td>
              <td>Tên SP</td>
              <td>Hình Ảnh</td>
              <td>Giá Bán</td>
              <td>Số lượng</td>
              <td>Thành Tiền</td>
            </tr>
          </thead>
          <tfoot>
            <td colSpan="5"></td>
            <td>Tổng Tiền</td>
            <td>
              {this.props.gioHang.reduce((tongTien, spGioHang, index) => {
                return (tongTien = spGioHang.soLuong * spGioHang.giaBan);
              }, 0)}
            </td>
          </tfoot>
          <tbody>{this.renderGioHang()}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //state là store tổng=> truy xuất đến GioHangReducer => biến state trện GioHangReducer
  return {
    gioHang: state.GioHangReducer.gioHang, //=> tạo ra 1 props của gio hang
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHangIndex: (index) => {
      const action = {
        type: "XOA_GIO_HANG",
        index,
      };
      dispatch(action);
    },
    tangGiamSoLuong: (index, tangGiam) => {
      const action = {
        type: "TANG_GIAM_SL",
        index,
        tangGiam,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ModalGioHangRedux);
