import React from 'react';
import ReactDOM from 'react-dom';
import FiltterointiLomake from './FiltterointiLomake';
import Henkilo from './Henkilo';
import LisaaHenkilo from './LisaaHenkilo';
import personService from './services/henkilot'
import Ilmoitus from './Ilmoitus'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      message: ''
    }
  }
  componentWillMount() {
    personService
      .getAll()
      .then(response => {
        this.setState({ persons: response })
      })
  }
  muutaIlmoitusta = (uusiIlmoitus) => {
    this.setState(() => ({
      message: uusiIlmoitus
    }))
    this.hideMessage();
  }
  hideMessage = () => {
    setTimeout(() => {
      this.setState({message: ''})
    }, 5000)
  }
  muutaPuhelinnumero = (newPerson) => {
    if(!window.confirm(newPerson.name + ' on jo luettelossa, korvataanko vanha' +
      ' numero uudella?')) {
        return false;
      }
      const personToUpdate = this.state.persons.filter((person) => person.name === newPerson.name);
      const changedArray = personService.update(personToUpdate[0].id, newPerson);
      changedArray.then(response => {
        this.muutaIlmoitusta('Henkilön ' + newPerson.name + ' numero korvattiin uudella numerolla');
        this.updateContacts();
      })
      .catch((error) => {
        console.log("poistettu jo")
      })
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
      this.muutaPuhelinnumero(person);
    } else {
      personService.create(person)
        .then(newPerson => {
          this.setState(() => ({
            persons: this.state.persons.concat(newPerson),
            newName: '',
            newNumber: ''
          }))
          this.muutaIlmoitusta('Henkilö ' + newPerson.name + ' lisättiin luetteloon')
        })
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
  updateContacts = () => {
    personService
      .getAll()
      .then(response => {
              this.setState({ persons: response })
            })
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
        {this.state.message && <Ilmoitus message={this.state.message}/>}
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
                id={person.id}
                name={person.name}
                number={person.number}
                updateContacts={this.updateContacts}
                muutaIlmoitusta={this.muutaIlmoitusta}
              />
          )}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
