import Axios from "axios";
import * as yup from "yup";
export const signupUserSchma = yup.object().shape({
    taiKhoan: yup.string().required("* Field is required!"),
    matKhau: yup.string().required("* Field is required!"),
    hoTen: yup.string().required("* Field is required!"),
    email: yup
      .string()
      .required("* Field is required!")
      .email("* Filed is invalid!"),
    soDT: yup
      .string()
      .required()
      .matches(/^[0-9]+$/),
    maNhom: yup.string().required("* Field is required!"),
  });
class UserService {
  signUp(data) {
    return Axios({
      method: "POST",
      url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data,
    });
  }
}
export default UserService;
