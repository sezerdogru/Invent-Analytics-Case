import * as actionTypes from "../actions/actionTypes"
import initialState from './initialState'

export default function totalResultsReducer(state = initialState.totalResults, action){
	switch(action.type){
		case actionTypes.GET_TOTAL_RESULTS:
			return action.payload 
		default:
			return state
	}
}