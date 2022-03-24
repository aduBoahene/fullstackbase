const initialState = {
  allCountries:[]
}
  
  export default function countriesReducer(state = initialState, action) {
    switch (action.type) {

      case "GET_ALL_COUNTRIES":
            return {
               ...state,
               allCountries : action.payload
            };

      default:
        
        return state
    }
  }