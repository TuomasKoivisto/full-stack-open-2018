import React from 'react';
import Osa from './Osa';

export default (props) => (
  <div>
    <Osa osa={props.osat[0].nimi} tehtavia={props.osat[0].tehtavia}/>
    <Osa osa={props.osat[1].nimi} tehtavia={props.osat[1].tehtavia}/>
    <Osa osa={props.osat[2].nimi} tehtavia={props.osat[2].tehtavia}/>
  </div>
)
