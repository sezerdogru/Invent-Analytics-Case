import * as Constant from "Constant" 

const changeMovie = (movie) => { 
	return {
		type:Constant.CHANGE_MOVIE,
		payload: movie
	}
}

const getMoviesSuccess = (movies) =>{
    return {
    	type:Constant.GET_MOVIES_SUCCESS, 
    	payload:movies
    }
}   

const movieActions = { 
	changeMovie,
	getMoviesSuccess,  
}

export default movieActions