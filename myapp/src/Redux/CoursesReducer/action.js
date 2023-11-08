import axios from "axios";
import { COURSE_FAILURE, COURSE_REQUEST, COURSE_SUCCESS } from "./actionType";

export const getCourses = (query) => (dispatch) => {
  dispatch({ type: COURSE_REQUEST });
  axios
    .get(
    //   (query=="")?`http://localhost:8080/courses`:`http://localhost:8080/courses?q=${query}`
    `http://localhost:8080/courses`,query
    )
    .then((response) => {
      console.log(response.data)
      dispatch({ type: COURSE_SUCCESS, payload: response.data });
    })
    .catch((error) => {
      console.log(error);
      dispatch({ type: COURSE_FAILURE });
    });
};