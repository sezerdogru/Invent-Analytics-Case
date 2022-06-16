import React from 'react';
import * as Constant from '../Constant' 
import { useDispatch, useSelector } from "react-redux"; 
import {handleChange} from '../redux/actions/searchAction' 

function Search  ({ 
	onSearch 
})   {   
   
  const dispatch = useDispatch();
   const form = useSelector(state => state.handleChangeReducer);


   const types = [
    { text:"Movie",value:'movie' },
    { text:"Series",value:'series' },
    { text:"Episode",value:'episode' },
  ]

  const {search, type, year } = form
  return (
    <div className="row p-2"> 
        <div className="form-group col-md-4">
          <input 
            type="text"
            value={search}
            className="form-control" 
            name="search"
            onChange={e => dispatch(handleChange(e))} 
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
            onChange={e => dispatch(handleChange(e))} 
          />
        </div> 
        <div className="form-group col-md-2"> 
          <select className="form-control" 
            name="type" 
            defaultValue={type}
            onChange={e => dispatch(handleChange(e))}>
            {types.map(typeItem => <option value={typeItem.value} key={typeItem.value}>{typeItem.text}</option>)} 
          </select>
        </div>
        <div className="form-group col"> 
          <button 
            type="submit"
            className="btn btn-primary"
            onClick={onSearch}
          >{Constant.SEARCH}</button>
        </div>
      </div> 
  )
}

export default React.memo(Search);