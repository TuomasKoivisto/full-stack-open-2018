import React from 'react';

import './ilmoitus.css';

export default ({ message }) => {
  if (message === null) {
    return null
  }
  return (
    <div className="success">
      {message}
    </div>
  )
}
