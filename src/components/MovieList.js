import React from 'react';
import { useDispatch, useSelector } from "react-redux"; 
import {useNavigate } from 'react-router-dom' 
import allActions from 'store/actions'  

function MovieList(){
	const { page, movies } = useSelector(state => ({ 
      movies: state.movies,
      page: state.page, 
  }));  

	const dispatch = useDispatch()

	const navigate = useNavigate() 

	function handleNavigate(event,movie) {
    event.preventDefault()
    dispatch(allActions.changeMovie(movie)) 
    navigate("/detail") 
  } 

  return (
    <>
    	<h2>Found: {movies.totalResults}</h2>
	    {movies.data.length === 0
	        ?
	        <span>{movies.error}</span> 
	        :
	        <table className="table"> 
	          <thead className="thead-dark">
	            <tr>
	              <th scope="col">#</th>
	              <th scope="col">Title</th>
	              <th scope="col">Year</th>
	              <th scope="col">imdbID</th>
	            </tr>
	          </thead>
	        <tbody>
	          {movies.data.map((movie, index) => (
	            <tr key={index}>
	              <th>{(page === 1 ? 0 : (page-1) *10) + index +1}</th>
	              <th><span className="name text-dark" onClick={(e) => handleNavigate(e,movie)}>{movie.Title}</span></th>
	              <td>{movie.Year}</td>
	              <td>{movie.imdbID}</td> 
	            </tr> 
	            )
	          )}
	        </tbody> 
	      </table>
	    }
    </>
  )
}

export default MovieList;