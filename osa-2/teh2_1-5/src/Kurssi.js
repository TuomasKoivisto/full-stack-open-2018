import React from 'react';

export default ({ kurssi }) => {
  const kurssienLkm = kurssi.osat.map((kurssi) => kurssi.tehtavia);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return (
  <div>
    <h1>{kurssi.nimi}</h1>
    {kurssi.osat.map((kurssi) => <p key={kurssi.id}>{kurssi.nimi} {kurssi.tehtavia}</p>)}
    <p>yhteensä {kurssienLkm.reduce(reducer)}</p>
  </div>
  )
}
