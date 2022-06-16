import { combineReducers } from "redux";
 
import changeMovieReducer from "./changeMovieReducer";
import movieListReducer from "./movieListReducer"; 
import totalResultsReducer from "./totalResultsReducer"; 
import handleChangeReducer from "./handleChangeReducer"; 

const rootReducer = combineReducers({
    movieListReducer,
    changeMovieReducer,
    totalResultsReducer,handleChangeReducer
})

export default rootReducer  