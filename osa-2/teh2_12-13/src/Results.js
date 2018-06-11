import React from 'react';

export default ({ countries, setFilter }) => {

  const details = (index) => (
    <div>
      <h1>{countries[index].name}</h1>
      <p>capital: {countries[index].capital}</p>
      <p>population: {countries[index].population}</p>
      <img style={{border: '1px solid grey'}} alt="flag" src={countries[index].flag} width="300"/>
    </div>
  )
  const showDetails = (e) => {
    setFilter(e.target.textContent)
  }

  if (countries.length > 10) {
    return (
      <p>Too many matches, specify another title</p>
    )
  } else if (countries.length > 1) {
    return (
      <div>
      {countries.map((country) =>
        <div
        key={country.name}
        onClick={showDetails}
        >
        {country.name}
        </div>
      )}
      </div>
    )
  } else if (countries.length === 1) {
    return details(0)
  }
  else {
    return (
      <p>search</p>
    )
  }
}
