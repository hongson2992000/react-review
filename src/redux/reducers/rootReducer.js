import { combineReducers } from "redux";
import { GioHangReducer } from "./GioHangReducer";
import { BurgerReducer } from "./BurgerReducer";
import { QuanLiSinhVienReducer } from "./QuanLiSinhVienReducer";
import CourseReducer from "./course";

//store tổng ứng dụng

export const rootReducer = combineReducers({
  course: CourseReducer,
  //Nơi đây sẽ chứa các reducer nghiệp vụ
  GioHangReducer: GioHangReducer,
  BurgerReducer,
  QuanLiSinhVienReducer,
});
