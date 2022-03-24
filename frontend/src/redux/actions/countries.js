

function fetchingCountries() {
    return (dispatch) => {
        fetch('https://restcountries.com/v2/all')
            .then(resp => resp.json())
            .then(countries => {
                dispatch({type: "GET_ALL_COUNTRIES", payload: countries })
                console.log("table", countries)
            })
    }
}

export { fetchingCountries }