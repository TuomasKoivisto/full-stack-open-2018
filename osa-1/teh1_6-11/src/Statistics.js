import React from 'react';
import Statistic from './Statistic';

export default (props) => {
  const {hyva, neutraali, huono, keskiarvo, positiiviset} = props.palaute;
  if (!hyva && !neutraali && !huono) {
    return (
      <div>
        <p>ei yhtään palautetta annettu</p>
      </div>
    )
  }
  return (
  <div>
    <table>
      <tbody>
        <Statistic text={'hyva'} maara={hyva}/>
        <Statistic text={'neutraali'} maara={neutraali}/>
        <Statistic text={'huono'} maara={huono}/>
        <Statistic text={'keskiarvo'} maara={keskiarvo}/>
        <Statistic text={'positiiviset'} maara={positiiviset}/>
      </tbody>
    </table>
  </div>
  )
}
