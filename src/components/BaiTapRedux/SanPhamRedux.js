import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    const { sanPham } = this.props;
    return (
      <div className="card">
        <img
          className="card-img-top"
          src={sanPham.hinhAnh}
          width={200}
          height={300}
        />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <button className="btn btn-danger" onClick={()=>{this.props.themGioHang(sanPham)}}>Thêm Sản Phẩm</button>
        </div>
      </div>
    );
  }
}
//Xây dựng hàm tạo props là hàm xử lý sự kiện => dưa dữ liệu lên store
const mapDispatchToProps = (dispatch) => {
  return {
    //Tạo ra props component là function=> dua dữ liệu kên store

    themGioHang: (sanPham) => {
      const spGioHang = {
        maSP: sanPham.maSP,
        tenSP: sanPham.tenSP,
        giaBan: sanPham.giaBan,
        soLuong: 1,
        hinhAnh: sanPham.hinhAnh,
      };
      // tạo action đưa dữ liệu lên reducer
      const action = {
        type: "THEM_GIO_HANG", //bắt buộc đặt type
        spGioHang: spGioHang, //Nội dung đưa lên reducer
      };
      //Dùng hàm dispatch đưa dữ liệu action lên reducer
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(SanPhamRedux);
