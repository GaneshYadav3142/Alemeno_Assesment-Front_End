import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import {reducer as CoursesReducer} from "./CoursesReducer/reducer"

const rootReducer=combineReducers({
CoursesReducer
})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))
