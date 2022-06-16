import * as actionTypes from "./actionTypes"
import axios from 'axios';
import * as Constant from "../../Constant" 

export function changeMovie(movie){ 
	return {type:actionTypes.CHANGE_MOVIE, payload: movie}
}

export function getMoviesSuccess(movies){
    return {type:actionTypes.GET_MOVIES_SUCCESS, payload:movies}
} 

export function getTotalResultsSuccess(totalResults){
    return {type:actionTypes.GET_TOTAL_RESULTS, payload:totalResults}
}

export function getMovies({search,year,type,page}){
    return function(dispath){ 
    	axios.get(`${Constant.apiURL}&s=${search}&y=${year}&type=${type}&page=${page}`)
	    	.then(res => {
	    		let movies = {}  
	    		let totalResults = 0  
	    		if(res.data.Response === "True"){
	    			movies["error"] = ""
	    			movies["data"] = res.data.Search
	    			totalResults = res.data.totalResults
	    		}
	    		else{
	    			movies["error"] = res.data.Error
	    			movies["data"] = []
	    		}

	      		dispath(getMoviesSuccess(movies)) 
	      		dispath(getTotalResultsSuccess(totalResults)) 
		    }).catch(err => console.log(err))  
    }
}