import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    startSushiNumber: 0,
    endSushiNumber: 4,
    balance: 100,
    sushiAte: []
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(sushisData => {
      this.setState({
        sushis: sushisData.map(sushi => { return {...sushi, isAte: false}})
      })
    })
  }

  eatSushi = (sushi) => {
    if (sushi.isAte) {
      alert('You already ate this sushi!')
      return null
    }

    if (this.state.balance < sushi.price) {
      alert('You don\'t have enough money to buy this sushi!')
      return null
    }

    if (this.state.sushiAte.length >= 10) {
      alert('You\'ve ate too much sushi. Take a break (refresh this page) and come back later!')
      return null
    }

    const sushis = [...this.state.sushis]
    const sushiAte = [...this.state.sushiAte, sushi]

    this.setState({
      sushiAte: sushiAte,
      balance: this.state.balance - sushi.price,
      sushis: sushis.map(s => {
        if (s === sushi) {
          return {...sushi, isAte: true}
        }
        return s
      })
    })
  }

  getMoreSushi = () => {
    let newStartNumber = this.state.startSushiNumber + 4
    let newEndNumber = this.state.endSushiNumber + 4

    if (this.state.sushis.length < newEndNumber) {
      newStartNumber = 0
      newEndNumber = 4
    }

    this.setState({
      startSushiNumber: newStartNumber,
      endSushiNumber: newEndNumber
    })
  }

  addBalance = (event, amount) => {
    event.preventDefault();
    this.setState({balance: this.state.balance + amount})
    event.target.reset();
  }

  render() {
    return (
      <div className="app">
        <SushiContainer 
          sushis={this.state.sushis} 
          eatSushi={this.eatSushi} 
          startSushiNumber={this.state.startSushiNumber} 
          endSushiNumber={this.state.endSushiNumber} 
          getMoreSushi={this.getMoreSushi}
        />
        <Table 
          balance={this.state.balance} 
          sushiAte={this.state.sushiAte} 
          addBalance={this.addBalance}
        />
      </div>
    );
  }
}

export default App;