let initialState = {
  course: [],
  courseDetail: null,
};
const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COURSES":
      state.course = action.payload;
      return { ...state };
    case "FETCH_COURSE_DETAIL":
      state.courseDetail = action.payload;
      return { ...state };
    default:
      return state;
  }
};
export default CourseReducer;
