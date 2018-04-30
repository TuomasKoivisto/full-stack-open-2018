import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';
import Statistics from './Statistics';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0,
      keskiarvo: 0,
      positiivisia: 0
    };
  }

  laskeKeskiarvo = () => {
    const {hyva, neutraali, huono} = this.state;
    const keskiarvo = hyva - huono / (hyva + huono + neutraali);
    const pyoristettyKeskiarvo = Math.round(keskiarvo * 10) / 10 || '-';
    this.setState(() => ({
       keskiarvo: pyoristettyKeskiarvo
     }))
  }
  laskePositiiviset = () => {
    const {hyva, neutraali, huono} = this.state;
    const positiiviset = hyva * 100 / (hyva + huono + neutraali);
    const pyoristettyPositiivset = Math.round(positiiviset * 10) / 10 || '-';
    this.setState(() => ({
       positiiviset: pyoristettyPositiivset + '%'
     }))
  }
  hyvaKlikattu = () => {
    this.setState((prevState) => ({
      hyva: prevState.hyva + 1
    }))
    this.laskeKeskiarvo();
    this.laskePositiiviset();
  }
  neutraaliKlikattu = () => {
    this.setState((prevState) => ({
      neutraali: prevState.neutraali + 1
    }))
    this.laskeKeskiarvo();
    this.laskePositiiviset();
  }
  huonoKlikattu = () => {
    this.setState((prevState) => ({
      huono: prevState.huono + 1
    }))
    this.laskeKeskiarvo();
    this.laskePositiiviset();
  }
  render() {
    const hyva = 'hyva';
    const neutraali = 'neutraali';
    const huono = 'huono';
    return (
      <div>
        <h1>anna palautetta</h1>
        <Button
          text={hyva}
          annaPalaute={this.hyvaKlikattu}
        />
        <Button
          text={neutraali}
          annaPalaute={this.neutraaliKlikattu}
        />
        <Button
          text={huono}
          annaPalaute={this.huonoKlikattu}
        />
        <h1>statistiikka</h1>
        <Statistics
          palaute={this.state}
        />

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
