import React, { Component } from "react";

export default class FormSinhVien2 extends Component {
  state = {
    maSV: "",
    hoTen: "",
    email: "",
    soDienThoai: "",
  };

  handleChange = (e) => {
    //Lay gia tri moi lan value input thay doi boi nguoi dung
    let tagtInput = e.target;
    let { name, value } = tagtInput;

    this.setState(
      {
        [name]: value,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    return (
      <div className="container">
        <div class="card text-left">
          <div className="card-header bg-dark text-white ">
            <h3>Thông Tin Sinh Viên</h3>
          </div>
          <form>
            <div className="row">
              <div className="form-group col-6">
                <span>Ma SV</span>
                <input
                  type="text"
                  className="form-control"
                  name="maSV"
                  value={this.state.maSV}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-6">
                <span>HoTen</span>
                <input
                  type="text"
                  className="form-control"
                  name="hoTen"
                  value={this.state.hoTen}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="form-group col-6">
                <span>Email</span>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group col-6">
                <span>So Dien Thoai</span>
                <input
                  type="text"
                  className="form-control"
                  name="soDienThoai"
                  value={this.state.soDienThoai}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 text-right">
                <button className="btn btn-success">Add Student</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
