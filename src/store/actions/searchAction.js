import * as Constant from "Constant" 

const inputHandleChange = (event) => {   
	const { name, value } = event.target  
	return {
		type:Constant.CHANGE_FORM,
		payload: { name, value }
	}
}  

const changePage = (page) => {
  	return {
		type:Constant.PAGE_CHANGE,
		payload: page
	} 
}

const searchActions = {
	inputHandleChange,
	changePage
}

export default searchActions