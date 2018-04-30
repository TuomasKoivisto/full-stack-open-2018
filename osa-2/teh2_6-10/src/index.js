import React from 'react';
import ReactDOM from 'react-dom';
import FiltterointiLomake from './FiltterointiLomake';
import Henkilo from './Henkilo';
import LisaaHenkilo from './LisaaHenkilo';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
      { name: 'Arto Hellas', number: '040-123456' },
      { name: 'Martti Tienari', number: '040-123456' },
      { name: 'Arto Järvinen', number: '040-123456' },
      { name: 'Lea Kutvonen', number: '040-123456' }
    ],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }
  lisaaLuetteloon = (e) => {
    e.preventDefault();
    const person = {
      name: this.state.newName,
      number: this.state.newNumber
    }
    const names = this.state.persons.map((person) => person.name);
    if (names.indexOf(person.name) !== -1) {
      this.setState(() => ({
        newName: '',
        newNumber: ''
      }))
      alert("Nimi on jo luettelossa");
    } else {
      const persons = this.state.persons.concat(person);
      this.setState(() => ({
        persons,
        newName: '',
        newNumber: ''
      }))
    }
  }

  handleNameChange = (e) => {
    e.persist();
    this.setState((prevState) => ({
      newName: e.target.value
    }))
  }
  handleNumberChange = (e) => {
    e.persist();
    this.setState((prevState) => ({
      newNumber: e.target.value
    }))
  }
  handleFilterChange = (e) => {
    e.persist();
    this.setState((prevState) => ({
      filter: e.target.value
    }))
  }
  render() {
    let persons = this.state.persons;
    if (this.state.filter) {
      persons = this.state.persons.filter((person) => (
        person.name.toLowerCase().includes(this.state.filter.toLowerCase())
      ));
    }
    return (
      <div>
        <h1>Puhelinluettelo</h1>
        <FiltterointiLomake handleFilterChange={this.handleFilterChange}/>
        <h2>Lisää uusi</h2>
        <LisaaHenkilo
          lisaaLuetteloon={this.lisaaLuetteloon}
          newName={this.state.newName}
          handleNameChange={this.handleNameChange}
          newNumber={this.state.newNumber}
          handleNumberChange={this.handleNumberChange}
        />
        <h2>Numerot</h2>
        <ul style={{listStyleType: "none"}}>
          {persons.map((person) =>
            <Henkilo
              key={person.name}
              name={person.name}
              number={person.number}
            />
          )}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
