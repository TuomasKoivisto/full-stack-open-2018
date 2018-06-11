import React from 'react';

export default ({
  lisaaLuetteloon,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange
}) => (
  <form onSubmit={lisaaLuetteloon}>
    <div>
      nimi:
      <input
        value={newName}
        onChange={handleNameChange}
      />
    </div>
    <div>
      puhelinnumero:
      <input
        value={newNumber}
        onChange={handleNumberChange}
      />
    </div>
    <div>
      <button type="submit">lisää</button>
    </div>
  </form>
)
