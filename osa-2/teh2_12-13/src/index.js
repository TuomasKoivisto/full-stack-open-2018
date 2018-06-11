import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Results from './Results';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filter: '',
      countries: []
    }
  }
  componentDidUpdate() {
    axios
      .get(`https://restcountries.eu/rest/v2/name/${this.state.filter}`)
      .then(response => {
        this.setState(() => ({
          countries: response.data
        }))
  })
  }
  searchCountries = (e) => {
    e.persist();
    console.log(e.target.value)
    this.setState(() => ({
      filter: e.target.value
    }))
}
  setFilter = (clickedCountry) => {
    this.setState(() => ({
      filter: clickedCountry
    }))
  }
  render() {
    return (
      <div>
        <div>
          find countries:
          <input
            value={this.state.filter}
            onChange={this.searchCountries}
          />
        </div>
        <Results
          countries={this.state.countries}
          setFilter={this.setFilter}
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
