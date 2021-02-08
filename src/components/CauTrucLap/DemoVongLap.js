import React, { Component } from "react";

class DemoVongLap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangSanPham: [
        { maSP: 1, tenSP: "IPhone x", gia: 1000 },
        { maSP: 2, tenSP: "Sam Sung", gia: 3000 },
        { maSP: 3, tenSP: "Nokia", gia: 2000 },
      ],
    };
  }
  renderSanPham = () => {
    let contentTable = [];
    //Cách 2 sử dụng map để tạo động các tag jsx từ mảng
    return this.state.mangSanPham.map((sanPham, index) => {
      // for (let i = 0; i < this.state.mangSanPham.length; i++) {
      // const sanPham = this.state.mangSanPham[i];
      // console.log(sanPham);
      // contentTable.push(
      return (
        <tr key={index}>
          <td>{sanPham.maSP}</td>
          <td>{sanPham.tenSP}</td>
          <td>{sanPham.gia}</td>
        </tr>
      );
    });
    
  };

  //Viết phương thức render các sản phẩm thành các tag tr
  render() {
    return (
      <div className="container">
        <h3>Demo Vong Lap</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Ma San Pham</th>
              <th>Ten San Pham</th>
              <th>Gia</th>
            </tr>
          </thead>
          <tbody>{this.renderSanPham()}</tbody>
        </table>
      </div>
    );
  }
}

export default DemoVongLap;
