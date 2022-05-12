import React, { Component } from 'react'

export class ClassEffectCO extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate() {
        document.title = `Clicked ${this.state.count} times`
    }

  render() {
    return <button onClick={() => {
        this.setState({count: this.state.count + 1})
        }}>
        Clicked {this.state.count} times
        </button>
  }
}

export default ClassEffectCO