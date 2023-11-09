import axios from "axios"
import { POST_STUDENT, STUDENT_FAILURE, STUDENT_REQUEST } from "./actionType"


//Fetching and then patching the data 
export const postStudent = (courseId, newStudent) => (dispatch) => {
  dispatch({ type: STUDENT_REQUEST });

  
  axios.get(`http://localhost:8080/courses/${courseId}`)
    .then((response) => {
      const courseData = response.data;
      const currentStudents = courseData.students || []; 

    
      const updatedStudents = [...currentStudents, newStudent];

      
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
