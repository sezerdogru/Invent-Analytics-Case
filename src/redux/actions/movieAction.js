import * as actionTypes from "./actionTypes"
import axios from 'axios';
import Constant from "../../Constant" 

export function changeMovie(movie){
	console.log(movie)
	return {type:actionTypes.CHANGE_MOVIE, payload: movie}
}

export function getMoviesSuccess(categories){
    return {type:actionTypes.GET_MOVIES_SUCCESS, payload:categories}
}

export function getTotalResultsSuccess(totalResults){
    return {type:actionTypes.GET_TOTAL_RESULTS, payload:totalResults}
}

export function getMovies({search,page}){
    return function(dispath){ 
    	axios.get(`${Constant.apiURL}&s=${search}&page=${page}`)
	    	.then(res => {  
	      		dispath(getMoviesSuccess(res.data.Search)) 
	      		dispath(getTotalResultsSuccess(res.data.totalResults)) 
		    }).catch(err => console.log(err))  
    }
}