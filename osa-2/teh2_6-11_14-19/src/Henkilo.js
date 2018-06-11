import React from 'react';
import personService from './services/henkilot'

export default ({name, number, id, updateContacts, muutaIlmoitusta}) => {
  const removePerson = () => {
    if(!window.confirm('Poistetaanko yhteystieto ' + name + '?')) {
      return false;
    }
    const changedArray = personService.remove(id);
    changedArray.then(response => {
      muutaIlmoitusta('Henkilö ' + name + ' poistettiin luettelosta')
      updateContacts()
    })
  }
  return  (
    <li>{name} {number}<button onClick={removePerson}>poista</button></li>
)}
