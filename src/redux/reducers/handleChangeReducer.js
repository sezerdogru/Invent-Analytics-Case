import * as actionTypes from "../actions/actionTypes"
import initialState from './initialState'

export default function handleChangeReducer(state = initialState.form, action){
	switch(action.type){
		case actionTypes.CHANGE_FORM: 
			const { name, value } = action.payload   
			return {...state, [name]:value}
		default:
			return state
	}
}