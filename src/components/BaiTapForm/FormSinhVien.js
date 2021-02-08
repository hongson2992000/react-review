import React, { Component } from "react";
import { connect } from "react-redux";

class FormSinhVien extends Component {
  state = {
    values: { maSV: "", hoTen: "", soDienThoai: "", email: "" },
    errors: { maSV: "", hoTen: "", soDienThoai: "", email: "" },
    valid: false,
  };
  handleOnChange = (event) => {
    //Lấy giá trị mỗi lần value input thay đổi bởi người dùng
    let tagInput = event.target;
    let { name, value, type, pattern } = tagInput;

    let errorMessage = "";

    //Kiểm tra email
    if (type === "email") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errorMessage = name + "không đúng định dạng";
      }
    }
    if (name === "soDienThoai") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errorMessage = name + "không đúng định dạng";
      }
    }
    //Kiểm tra rỗng
    if (value.trim() === "") {
      //Kiểm tra bất kì control input nào người dùng nhập vào dều kiểm tra rỗng
      errorMessage = name + "không được bỏ trống !";
    }
    let values = { ...this.state.values, [name]: value };
    let errors = { ...this.state.errors, [name]: errorMessage };
    this.setState(
      {
        ...this.state,
        values: values,
        errors: errors,
      },
      () => {
        console.log(this.state);
        this.checkValid();
      }
    );
  };
  handleSubmit = (event) => {
    event.preventDefault(); //Cản sự kiện submit load lại trang
    this.props.themSinhVien(this.state.values);
  };
  checkValid = () => {
    let valid = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "" || this.state.values[key] === "") {
        valid = false;
      }
    }
    this.setState({
      ...this.state,
      valid: valid,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="card text-left">
          <div className=" card-header bg-dark text-white">
            <h3>Thong Tin Sinh Vien</h3>
          </div>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="row">
                <div className="form-group col-6">
                  <span>Ma SV</span>
                  <input
                    className="form-control"
                    name="maSV"
                    value={this.state.values.maSV}
                    onChange={this.handleOnChange}
                  />
                  <p className="text-danger">{this.state.errors.maSV}</p>
                </div>
                <div className="form-group col-6">
                  <span>Ho Ten</span>
                  <input
                    className="form-control"
                    name="hoTen"
                    value={this.state.values.hoTen}
                    onChange={this.handleOnChange}
                  />
                  <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>
              </div>
              <div className="row">
                <div className="form-group col-6">
                  <span>So Dien Thoai</span>
                  <input
                    type="text"
                    pattern="^(0|[1-9][0-9]*)$"
                    className="form-control"
                    name="soDienThoai"
                    value={this.state.values.soDienThoai}
                    onChange={this.handleOnChange}
                  />
                  <p className="text-danger">{this.state.errors.soDienThoai}</p>
                </div>
                <div className="form-group col-6">
                  <span>Email</span>
                  <input
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className="form-control"
                    name="email"
                    value={this.state.values.email}
                    onChange={this.handleOnChange}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 text-right">
                  {this.state.valid ? (
                    <button className="btn btn-success" type="submit">
                      Them Sinh Vien
                    </button>
                  ) : (
                    <button className="btn btn-success" type="submit" disabled>
                      Them Sinh Vien
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      const action = {
        type: "THEM_SINH_VIEN",
        sinhVien,
      };
      dispatch(action);
    },
  };
};
export default connect(null, mapDispatchToProps)(FormSinhVien);
