import { createAction } from "./index";
import { courseService } from "../../Services";
import { FETCH_COURSES, FETCH_COURSE_DETAIL } from "./type";
export const fetchCourses = () => {
  return (dispatch) => {
    courseService
      .fetchCourse()
      .then((res) => {
        dispatch(createAction(FETCH_COURSES, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const fetchDetailCourse = (id) => {
  return (dispatch) => {
    courseService
      .fetchCourseDetails(id)
      .then((res) => {
        dispatch(createAction(FETCH_COURSE_DETAIL, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
