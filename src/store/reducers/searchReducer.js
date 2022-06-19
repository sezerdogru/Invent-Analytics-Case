import * as Constant from "Constant" 
import initialState from './initialState'

const inputData = (state = initialState.form, action) => {
	switch(action.type){
		case Constant.CHANGE_FORM: 
			const { name, value } = action.payload   
			return {...state, [name]:value}  
		default:
			return state
	}
}

const page = (state = initialState.page, action) => {
	switch(action.type){
		case Constant.PAGE_CHANGE:
			return action.payload
		default:
			return state
	}
}

const searchReducer = {
	inputData,
	page
}

export default searchReducer