import React from 'react';
import { useDispatch, useSelector } from "react-redux"; 
import * as Constant from 'Constant' 
import searchActions  from 'store/actions/searchAction' 
import thunkActions from 'store/actions/thunkActions'

function Search() {
  const dispatch = useDispatch();
  const inputData = useSelector(state => state.inputData);


  const types = [
    { text:"Movie",value:'movie' },
    { text:"Series",value:'series' },
    { text:"Episode",value:'episode' },
  ]

  const _search = () => {
    dispatch(thunkActions.changePage(1))
    dispatch(thunkActions.getMovies())
  }

  const {search, type, year } = inputData
  
  return (
    <div className="row p-2"> 
        <div className="form-group col-md-4">
          <input 
            type="text"
            value={search}
            className="form-control" 
            name="search"
            onChange={e => dispatch(searchActions.inputHandleChange(e))} 
            placeholder={Constant.SEARCH_BY_TITLE}
          />
        </div>
        <div className="form-group col-md-3"> 
          <input
          	value={year}
            type="text"
            className="form-control"
            placeholder={Constant.SEARCH_BY_YEAR}
            name="year"
            onChange={e => dispatch(searchActions.inputHandleChange(e))} 
          />
        </div> 
        <div className="form-group col-md-2"> 
          <select className="form-control" 
            name="type" 
            defaultValue={type}
            onChange={e => dispatch(searchActions.inputHandleChange(e))}>
              {types.map(typeItem => (
                <option value={typeItem.value} key={typeItem.value}>{typeItem.text}</option>
              ))} 
          </select>
        </div>
        <div className="form-group col"> 
          <button 
            type="submit"
            className="btn btn-primary"
            onClick={_search}
          >{Constant.SEARCH}</button>
        </div>
      </div> 
  )
}

export default (Search);