import { COURSE_FAILURE, COURSE_REQUEST, COURSE_SUCCESS } from "./actionType"




const initState={
    courses:[],
    isLoading:false,
    isError:false,
   
}

export const reducer=(state=initState,{type,payload})=>{
    switch(type){
        case COURSE_REQUEST:{
            return{
                ...state,
                isLoading:true,
                isError:false

            }
        }
        case COURSE_SUCCESS:{
            return{
                ...state,
                isLoading:false,
                courses:payload

            }
        }
        case COURSE_FAILURE:{
            return{
                ...state,
                isLoading:false,
                isError:true

            }
        }

        default:{
            return state
        }
    }
}