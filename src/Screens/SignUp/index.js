import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { userService } from "../../Services/";
import { signupUserSchma } from "../../Services/user";
import CourseService from "../../Services/course";

class SignUpScreen extends Component {
  handleSubmit = (values) => {
    userService
      .signUp(values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <div className="w-50 mx-auto">
        <h1 className="dislay-4 text-center">Sign Up</h1>
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            email: "",
            soDT: "",
            maNhom: "GP01",
          }}
          validationSchema={signupUserSchma}
          onSubmit={this.handleSubmit}
          render={(formikProps) => (
            <Form>
              <div className="form-group">
                <label>Tài Khoản</label>
                <Field type="text" className="form-control" name="taiKhoan" />
                <ErrorMessage name="taiKhoan">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Mật Khẩu</label>
                <Field
                  type="password"
                  className="form-control"
                  name="matKhau"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="matKhau">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Họ Tên</label>
                <Field
                  type="text"
                  className="form-control"
                  name="hoTen"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="hoTen">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Email</label>
                <Field
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="email">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Số Điện Thoại</label>
                <Field
                  type="text"
                  className="form-control"
                  name="soDT"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="soDT">
                  {(msg) => <div className="alert alert-danger">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Mã Nhóm</label>
                <Field
                  component="select"
                  className="form-control"
                  name="maNhom"
                  onChange={formikProps.handleChange}
                >
                  <ErrorMessage name="maNhom">
                    {(msg) => <div className="alert alert-danger">{msg}</div>}
                  </ErrorMessage>
                  <option>GP01</option>
                  <option>GP02</option>
                  <option>GP03</option>
                  <option>GP04</option>
                  <option>GP05</option>
                  <option>GP06</option>
                  <option>GP07</option>
                  <option>GP08</option>
                  <option>GP09</option>
                  <option>GP10</option>
                </Field>
                <div className="text-center m-4">
                  <button className="btn btn-success">Submit</button>
                </div>
              </div>
            </Form>
          )}
        />
      </div>
    );
  }
}
export default SignUpScreen;
