import * as actionTypes from "./actionTypes"  

export function handleChange(event){   
	const { name, value } = event.target 
	return {type:actionTypes.CHANGE_FORM, payload: { name, value }}
}  