import React from 'react';
import { useDispatch, useSelector } from "react-redux"; 
import thunkActions from 'store/actions/thunkActions'

const Pagination = () => { 
  const {movies,page} = useSelector(state => ({
    movies: state.movies,
    page: state.page, 
  }));

  const dispatch = useDispatch();

  const handleChangePage = (page) => {
    dispatch(thunkActions.changePage(page))
  } 

  const {totalResults} = movies 
  let pageCount = 1  

  if(totalResults === 0)
    pageCount = 1
  else
    pageCount = Math.ceil(totalResults / 10)  

  if(pageCount > 10) 
    pageCount = 10 

  let items = Array.from({length: pageCount}, (_, i) => i + 1) 

  return (
    <ul className="pagination">
      <NextPrevItem text="Previous" page={page - 1} onClick={handleChangePage} /> 
      {items.map(val => (
        <li key={val} className={`page-item ${page === val ? 'active': ''}`}>
          <span className="page-link" onClick={() => handleChangePage(val)}>{val}</span>
        </li>
      ))}
      <NextPrevItem text="Next" page={page + 1} onClick={handleChangePage} /> 
    </ul>
  ) 
}


const NextPrevItem = ({text, page, onClick}) => (
  <li 
    className={`page-item ${page === 0 ? 'disabled': ''}`}
    onClick={() => page === 0 ? null : onClick(page)}>
    <a className="page-link">{text}</a>
  </li> 
) 

export default Pagination;