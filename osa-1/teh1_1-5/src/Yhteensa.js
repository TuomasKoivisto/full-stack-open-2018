import React from 'react';

export default (props) => {
  const yhteensa = props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia;
  return (
  <p>Yhteensä {yhteensa} tehtävää</p>
  )
}
