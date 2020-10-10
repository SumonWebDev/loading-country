import React from 'react';

const Country = (props) => {
    const {name,population,region,flag}=props.country;
    const flagStyle={height:'70px'}
    return (
        <div>
            <h4>This is a Country : {props.country.name}</h4>
            <img style={flagStyle} src={flag}/>
            <p>population:{props.country.population}</p>
            <p>region:{props.country.region}</p>
        </div>
    );
};

export default Country;