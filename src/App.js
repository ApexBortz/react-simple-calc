// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

class App extends Component {

  state = {
    num1: "",
    num2: "",
    result: 0
  }

  setNum = (e) => {
    this.setState({ [e.target.name]: e.target.value});
  }

  calculate = (e) => { 
    e.preventDefault()
    this.setState((previousState, currentProps) => {
      return {
        result: parseInt(this.state.num1) + parseInt(this.state.num2)
      }
    })
  }

  render() {
    return (
      <>
        <div className="caclulator">
          <h1>Add with React!</h1>

          <form onSubmit={this.calculate}>
            <input type="number" 
                   name="num1"
                   value={this.state.num1}
                   onChange={this.setNum} />
                <span>+</span>
            <input type="number" 
                   name="num2"
                   value={this.state.num2}
                   onChange={this.setNum} />
              <button type="submit">=</button>
              <h3>{this.state.result}</h3>
          </form>
        </div>
      </>
    )
  }
}

export default App;
