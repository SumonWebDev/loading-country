import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Country from './componants/Country/Country';

function App() {
  const [countries,setCountries]= useState([]);
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
    .catch(error=>console.log(error))

  },[])
  const handleAddCountry=(country)=>{
    console.log('country added',country)
  }
  return (
    <div className="App">
    <h3>loading country:{countries.length}</h3>
    <h4>country added</h4>
    <ul>
      {
        countries.map(country=><Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
      }
    </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}

export default App;
