import React, {useEffect, useState, } from 'react';
import '../styles/App.scss';
import {Link,useNavigate } from 'react-router-dom'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {getMovies,changeMovie} from '../redux/actions/movieAction' 

function Dashboard({
	movies,
	getMovies, 
  totalResults,
  changeMovie, 
  currentMovie,
	...props
}) {  

  const navigate = useNavigate()
  const [search, setSearch] = useState("Pokemon")
  const [page, setPage] = useState(1) 

  useEffect(()=>{ 
    getMovies({search,page}) 
  },[])  

  const nextPrev = (page)  => {
  	setPage(page) 
    getMovies({search,page})
  }

  function handleNavigate(event,movie) {
    event.preventDefault()
    changeMovie(movie) 
  navigate("/detail")
     
  }

  const paginationItems = () => { 
    let pageCount = 1 
    if(totalResults > 20) pageCount = 3 
    else if(totalResults > 10) pageCount = 2

    const items = []

    for (let i = 1; i<= pageCount; i++){
      items.push(
        <li key={i} className={`page-item ${page === i ? 'active': ''}`}>
          <span className="page-link" onClick={() => nextPrev(i)}>{i}</span>
        </li>) 
    } 
    return items 
  }

  return (
    <>  
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
          {movies.map((movie, index) => {
            return (
                <tr key={index}>
                  <th scope="row">{(page === 1 ? 0 : (page-1) *10) + index +1}</th>
                  <th><span className="name text-dark" onClick={(e) => handleNavigate(e,movie)}>{movie.Title}</span></th>
                  <td>{movie.Year}</td>
                  <td>{movie.imdbID}</td> 
                </tr> 
            )
          } )}
        </tbody> 
      </table>
      <ul className="pagination">
          <li className={`page-item ${page === 1 ? 'disabled': ''}`}><span className="page-link"onClick={() => nextPrev(page-1)}>Previous</span></li>
          {paginationItems()}
          <li className="page-item"><span className="page-link" onClick={() => nextPrev(page+1)}>Next</span></li>
        </ul>
    </>
  );
}


function mapStateToProps(state){
	return {
		movies: state.movieListReducer,
    totalResults: state.totalResultsReducer,
    currentMovie: state.changeMovieReducer
	}
}

const mapDispatchToProps = {
	getMovies,changeMovie
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
