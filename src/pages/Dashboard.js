import React, {useEffect } from 'react'; 
import { useDispatch } from "react-redux";  
import thunkActions from 'store/actions/thunkActions' 
import {MovieList, Pagination, Search} from 'components'  
import 'App.scss';

function Dashboard() {   
  const dispatch = useDispatch();  

  useEffect(()=>{  
    dispatch(thunkActions.getMovies())
  },[])  

  return (
    <>   
      <Search  /> 
      <MovieList />
      <Pagination />
    </>
  );
}  

export default Dashboard;
