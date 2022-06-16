import React from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'; 

function Detail ({movie}) {
  return (
    <div>
      <div><strong>Title: </strong><span>{movie.Title}</span></div>
      <div><strong>Year: </strong><span>{movie.Year}</span></div>
      <div><strong>Type: </strong><span>{movie.Type}</span></div>
      <div><strong>imdbID: </strong><span>{movie.imdbID}</span></div>
      <img src={movie.Poster} />


    </div>
  )
}

function mapStateToProps(state){
  return {
    movie: state.changeMovieReducer 
  }
} 

export default connect(mapStateToProps)(Detail);
