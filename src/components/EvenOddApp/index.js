import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    const check = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="container">
        <h1 className="heading">Count {count}</h1>
        <p className="para">Count is {check}</p>
        <button type="button" className="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="description">
          *Increase by Random number between 0 to 100.
        </p>
      </div>
    )
  }
}
export default EvenOddApp
