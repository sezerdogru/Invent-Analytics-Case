const initialState =  {
    currentMovie: {},
    movies: { error:"", data:[], totalResults: 0 },  
    form:{
        search : "Pokemon",
        year:"",
        type:"movie",
    },
    page: 1
}

export default initialState