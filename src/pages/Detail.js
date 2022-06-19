import React from 'react'; 
import {useSelector } from "react-redux"; 
import * as Constant from 'Constant'

function Detail () {
  const movie = useSelector(state => state.currentMovie);

  return (
    <div className="detail">
      <div><strong>{`${Constant.TITLE}: `}</strong><span>{movie.Title}</span></div>
      <div><strong>{`${Constant.YEAR}: `}</strong><span>{movie.Year}</span></div>
      <div><strong>{`${Constant.TYPE}: `}</strong><span>{movie.Type}</span></div>
      <div><strong>{`${Constant.IMDBID}: `}</strong><span>{movie.imdbID}</span></div>
      <img alt="" src={movie.Poster} /> 
    </div>
  )
} 
export default Detail;
