import logo from './logo.svg';
import './App.css';
import {fetchingCountries} from './redux/actions/countries'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {

  const {countries} = useSelector(state => state)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchingCountries())
  },[dispatch])



  useEffect(() => {
   console.log(countries)
  },[])

  return (
   <div>
      {countries.allCountries && countries.allCountries?.map(country=><p key={country.alpha2Code}>{country.name}</p>)}
   </div>
  );
}

export default App;
