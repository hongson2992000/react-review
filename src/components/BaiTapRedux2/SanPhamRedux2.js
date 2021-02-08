import React, { Component } from "react";

import { connect } from "react-redux";

 class SanPhamRedux2 extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="card" style={{ width: "300", height: "500px" }}>
        <img className="card-img-top" src={sanPham.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.giaBan}</p>
          <button className="btn btn-danger" onClick={()=>{this.props.themGioHang(sanPham)}}>Add To Card</button>
        </div>
      </div>
    );
  }
}

//xậy dựng hàm tạo ra prop là hàm xử lý sự kiện => đẩy dữ liệu lên store

const mapDispatchToProps = (dispatch) => {
  return {
    //Tạo ra props component (là function => đưa dữ liệu lên store)

    themGioHang: (sanPham) => {
      // Tạo ra sản phẩm giỏ hàng
      const spGioHang = {
        maSP: sanPham.maSP,
        tenSP: sanPham.tenSP,
        giaBan: sanPham.giaBan,
        soLuong: 1,
        hinhAnh: sanPham.hinhAnh,
      };

      //tạo action đưa dữ liệu lên reducer

      const action = {
        type: "THEM_GIO_HANG", // bắt buộc phải có type
        spGioHang: spGioHang, // Nội dung đưa lên reducer
      };

      //Dùng hàm dispatch đưa dữ action lên reducer
      dispatch(action);
    },
  };
};
export default connect(null,mapDispatchToProps)(SanPhamRedux2)