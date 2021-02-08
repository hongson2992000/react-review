import React, { Component } from "react";

import { connect } from "react-redux";
import { courseService } from "../../Services";
import { createAction } from "../../redux/Action/index";
import { FETCH_COURSE_DETAIL } from "../../redux/Action/type";
import { fetchDetailCourse } from "../../redux/Action/course";

class CourseDetailScreen extends Component {
  render() {
    return (
      <div>
        <img src={this.props.courseDetail.hinhAnh} alt="" />
        <h3>{this.props.courseDetail.tenKhoaHoc}</h3>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchDetailCourse(this.props.match.params.courseId));
  }
}
const mapStateToProps = (state) => ({
  courseDetail: state.course.courseDetail || {
    maKhoaHoc: "",
    tenKhoaHoc: "",
    hinhAnh: "",
    nguoiTao: {
      taiKhoan: "",
      hoTen: "",
    },
  },
});
export default connect(mapStateToProps)(CourseDetailScreen);
