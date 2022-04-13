import React, { Component } from 'react'
import { connect } from 'react-redux'
export class App extends Component {
  state = {
    count: 0
  }
  increase = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrease = () => {
    this.setState({
      count: this.state.count - 1
    })
  }


  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.props.increase}> + </button>
        <div>{this.props.count}</div>
        <button onClick={this.props.decrease}> - </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increase: () => { dispatch({ type: 'INCREASE' }) },
    decrease: () => { dispatch({ type: 'DECREASE' }) }
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(App);