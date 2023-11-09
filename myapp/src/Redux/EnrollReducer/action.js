import axios from "axios"
import { POST_STUDENT, STUDENT_FAILURE, STUDENT_REQUEST } from "./actionType"



export const postStudent = (courseId, newStudent) => (dispatch) => {
  dispatch({ type: STUDENT_REQUEST });

  // Fetch the current course data from the API
  axios.get(`http://localhost:8080/courses/${courseId}`)
    .then((response) => {
      const courseData = response.data;
      const currentStudents = courseData.students || []; // Extract students array, handle case where it doesn't exist

      // Add the new student to the students array
      const updatedStudents = [...currentStudents, newStudent];

      // Send a PUT request to update only the students array of the specific course
      axios.patch(`http://localhost:8080/courses/${courseId}`, { students: updatedStudents })
        .then((res) => {
          console.log(res.data);
          dispatch({ type: POST_STUDENT, payload: res.data.students });
        })
        .catch((err) => {
          console.log(err);
          dispatch({ type: STUDENT_FAILURE });
        });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: STUDENT_FAILURE });
    });
};
