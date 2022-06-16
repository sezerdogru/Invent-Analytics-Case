const initialState =  {
    currentMovie: {},
    movies: {error:"",data:[]}, 
    totalResults: 0,
    error: "",
    form:{
        search : "Pokemon",
        year:"",
        type:"movie",
    }
}

export default initialState