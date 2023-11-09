import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as CoursesReducer} from "./CoursesReducer/reducer"
import {reducer as StudentReducer} from "./EnrollReducer/reducer"
const rootReducer=combineReducers({
CoursesReducer,
StudentReducer
})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
