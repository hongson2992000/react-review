import React, { Component } from "react";
import CourseItem from "../../components/CourseItems/index";

import { connect } from "react-redux";
import { fetchCourses } from "../../redux/Action/course";

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <h1 className="dislay-4 text-center">Danh Sach Khoa Hoc</h1>
        <div className="container">
          <div className="row">
            {this.props.courseList.map((item, index) => (
              <div className="col-3">
                <CourseItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    //axios return promise(là đối tượng có từ ES6)
    this.props.dispatch(fetchCourses());
  }
}
const mapStateToProps = (state) => ({
  courseList: state.course.course,
});
export default connect(mapStateToProps)(HomeScreen);
