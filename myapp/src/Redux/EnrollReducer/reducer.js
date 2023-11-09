import { POST_STUDENT, STUDENT_FAILURE, STUDENT_REQUEST } from "./actionType"


const initialState={
    isloading:false,
    iserr:false,
    students:[]
}

export const reducer=(state=initialState,{type,payload})=>{

    switch(type){
        case STUDENT_REQUEST:{
            return{
                ...state,
                isloading:true,
                iserr:false
            }
        }
        case POST_STUDENT:{
            return{
                ...state,
                isloading:false,
                students: payload.students,
            }
        }
        case STUDENT_FAILURE:{
            return {
                ...state,
                isloading:false,
               iserr:true
            }
        }

        default: {
            return state
        }

}
}