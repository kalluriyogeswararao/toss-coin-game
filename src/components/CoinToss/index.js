import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onTossAgain = () => {
    const number = Math.ceil(Math.random() * 100)
    if (number % 2 === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
      }))
      this.setState({
        image: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    }
    if (number % 2 !== 0) {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
      }))
      this.setState({
        image: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
    }
  }

  render() {
    let total = 0
    const {image, heads, tails} = this.state
    total = heads + tails
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={image} alt="toss result" className="image" />
          <button type="button" className="button" onClick={this.onTossAgain}>
            Toss Coin
          </button>
          <div className="result">
            <p className="values">Total: {total}</p>
            <p className="values">Heads: {heads}</p>
            <p className="values">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
