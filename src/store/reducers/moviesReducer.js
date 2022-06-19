import * as Constant from "Constant" 
import initialState from './initialState'

const movies = (state = initialState.movies, action) => {
	switch(action.type){
		case Constant.GET_MOVIES_SUCCESS:
			return action.payload   
		default:
			return state
	}
}

const currentMovie = (state = initialState.currentMovie, action) => {
	switch(action.type){ 
		case Constant.CHANGE_MOVIE:
			return action.payload  
		default:
			return state
	}
} 

const moviesReducer  = {
	movies,
	currentMovie
}

export default moviesReducer 