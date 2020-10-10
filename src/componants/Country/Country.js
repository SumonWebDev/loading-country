import React from 'react';

const Country = (props) => {
    const {name,population,region,flag}=props.country;
    const flagStyle={height:'70px'}
const countryStyle={border:'1px solid green', margin:'10px', padding:'10px'}
const handleAddCountry=props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h2>{props.country.name}</h2>
            <img style={flagStyle} src={flag}/>
            <p>population:{props.country.population}</p>
            <p>region:{props.country.region}</p>
            <button onClick={()=>handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;