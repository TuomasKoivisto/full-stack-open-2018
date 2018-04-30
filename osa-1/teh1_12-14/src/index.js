import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      pisteet: [0,0,0,0,0,0],
      indexOfMax: 0
    }
  }
  randomAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * this.props.anecdotes.length);
    this.setState(() => ({
      selected: randomNumber
    }))
  }
  voteSelected = () => {
    const kopio = [...this.state.pisteet];
    kopio[this.state.selected] += 1;
    this.setState(() => ({
      pisteet: kopio
    }))
    this.indexOfMax(this.state.pisteet);
  }
  indexOfMax = (arr) => {
    if (arr.length === 0) {
        return -1;
    }
    let max = arr[0];
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    this.setState(() => ({
      indexOfMax: maxIndex
    }))
}
  render() {
    return (
      <div>
        <p>{this.props.anecdotes[this.state.selected]}</p>
        <p style={{fontWeight: 'bold'}}>has {this.state.pisteet[this.state.selected]} votes</p>
        <button onClick={this.voteSelected}>vote</button>
        <button onClick={this.randomAnecdote}>next anecdote</button>
        <h1>anecdote with most votes:</h1>
        <p>{anecdotes[this.state.indexOfMax]}</p>
        <p style={{fontWeight: 'bold'}}>has {Math.max(...this.state.pisteet)} votes</p>
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
