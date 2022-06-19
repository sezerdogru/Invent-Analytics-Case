import allActions from 'store/actions'
import axios from 'axios';
import * as Constant from "Constant" 

const changePage = (page) => {
	 return (dispatch) => { 
		dispatch(allActions.searchActions.changePage(page)) 
		dispatch(getMovies()) 
	}
} 

const getMovies = () => {
    return (dispatch, getState) => { 
    	const { inputData, page } = getState()  
    	const { year, search, type } = inputData
    	const url = `${Constant.apiURL}&s=${search}&y=${year}&type=${type}&page=${page}`
    	axios.get(url)
	    	.then(res => {
	    		let movies = {}  
	    		res = res.data
	    		let error = "", data = [], totalResults = 0

	    		if(res.Response === "True"){ 
	    			data = res.Search
	    			totalResults = res.totalResults 
	    		}
	    		else{
	    			error = res.Error   
	    		}

	    		movies["error"] = error
	    		movies['data'] = data
	    		movies['totalResults'] = totalResults

	      		dispatch(allActions.movieActions.getMoviesSuccess(movies))  
		    }).catch(err => console.log(err))  
    }
}


const thunkActions = { 
	getMovies,
	changePage
}

export default thunkActions