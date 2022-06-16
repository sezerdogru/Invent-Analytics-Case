import { combineReducers } from "redux";
 
import changeMovieReducer from "./changeMovieReducer";
import movieListReducer from "./movieListReducer"; 
import totalResultsReducer from "./totalResultsReducer"; 

const rootReducer = combineReducers({
    movieListReducer,
    changeMovieReducer,
    totalResultsReducer
})

export default rootReducer  