import { combineReducers } from "redux";
  
import moviesReducer  from "./moviesReducer";  
import searchReducer from "./searchReducer"; 

const rootReducer = combineReducers({
    ...moviesReducer,  
    ...searchReducer
})

export default rootReducer  