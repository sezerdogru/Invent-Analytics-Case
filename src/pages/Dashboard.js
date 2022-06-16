import React, {useEffect, useState  } from 'react';
import '../styles/App.scss';
import {useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"; 
import {getMovies,changeMovie} from '../redux/actions/movieAction' 
import Search from '../components/Search' 
import Pagination from '../components/Pagination' 

function Dashboard() {  
  const { totalResults,form, movies } = useSelector(state => ({
      totalResults: state.totalResultsReducer,
      movies: state.movieListReducer,
      form: state.handleChangeReducer, 
  }));

  const {search,type,year} = form

  const dispatch = useDispatch();

  const navigate = useNavigate()
  
  const [page, setPage] = useState(1)    

  useEffect(()=>{  
    nextPrev(1)
  })   

  const nextPrev = (page)  => {
  	setPage(page) 
    dispatch(getMovies({search,page,type,year}) )
  }

  function handleNavigate(event,movie) {
    event.preventDefault()
    dispatch(changeMovie(movie)) 
    navigate("/detail") 
  } 

  return (
    <>   
      <Search   
        onSearch={() => dispatch(getMovies({search,year,type,page}))} 
      /> 
      <h2>Found: {totalResults}</h2>
      {movies.data.length === 0 
            ? <span>{movies.error}</span> 
            :<table className="table"> 
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Year</th>
            <th scope="col">imdbID</th>
          </tr>
        </thead>
        <tbody>
          {movies.data.map((movie, index) => {
            return (
                <tr key={index}>
                  <th>{(page === 1 ? 0 : (page-1) *10) + index +1}</th>
                  <th><span className="name text-dark" onClick={(e) => handleNavigate(e,movie)}>{movie.Title}</span></th>
                  <td>{movie.Year}</td>
                  <td>{movie.imdbID}</td> 
                </tr> 
            )
          } )}
        </tbody> 
      </table>
    }
      <ul className="pagination">
          <li className={`page-item ${page === 1 ? 'disabled': ''}`}><span className="page-link"onClick={() => nextPrev(page-1)}>Previous</span></li>
          <Pagination totalResults={totalResults} onClick={nextPrev} page={page} />
          <li className={`page-item ${movies.data.length === 0 || totalResults - (page * 10) < 1 ? 'disabled': ''}`}><span className="page-link" onClick={() => nextPrev(page+1)}>Next</span></li>
        </ul>
    </>
  );
}  

export default Dashboard;
