import React, { Component } from "react";
import phoneData from "../../../data/phoneData.json";
import SanPham from "./SanPham"

class DanhSachSanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sanPhamChiTiet: phoneData[0],
    };
  }
  renderSanPham = () => {
    return phoneData.map((dt, index) => {
      return (
        <SanPham key={index}  dt={dt} xemSanPham={this.xemSanPham}/>
      );
    });
  };
  //Dữ liệu cần lấy ở component DanhSachSanPham => đặt callback function tại DanhSachSanPham

  xemSanPham =(sanPham)=>{
    this.setState({
        sanPhamChiTiet:sanPham
    })
  }

  render() {
    let { sanPhamChiTiet } = this.state;
    return (
      <div className="container">
        <div className="row"> {this.renderSanPham()}</div>
        <hr />
        <div className="row">
          <div className="col-6 text-left">
            <h3>{sanPhamChiTiet.tenSP}</h3>
            <img src={sanPhamChiTiet.hinhAnh} width={250} height={300} alt="" />
          </div>
          <div className="col-6 ">
            <table className="table">
              <tr>
                <th>Man Hinh</th>
                <th>{sanPhamChiTiet.manHinh}</th>
              </tr>
              <tr>
                <th>He Dieu Hanh</th>
                <th>{sanPhamChiTiet.heDieuHanh}</th>
              </tr>
              <tr>
                <th>Camera Truoc</th>
                <th>{sanPhamChiTiet.cameraTruoc}</th>
              </tr>
              <tr>
                <th>Camera Sau</th>
                <th>{sanPhamChiTiet.cameraSau}</th>
              </tr>
              <tr>
                <th>RAM</th>
                <th>{sanPhamChiTiet.ram}</th>
              </tr>
              <tr>
                <th>ROM</th>
                <th>{sanPhamChiTiet.rom}</th>
              </tr>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default DanhSachSanPham;
