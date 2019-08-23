import React, { Component } from 'react'
import { connect } from 'react-redux'

class ATMForm extends Component {
  state = {
    withdrawal: 0
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch({ type: 'GIT_RICH', amount: this.state.withdrawal })
  }

  handleChange = (e) => this.setState({ withdrawal: parseInt(e.target.value) })

  render() {
    return <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
      <input type="number" name="amount" value={this.state.withdrawal} />
      <input type="submit" value="GIMME THE MONEY" />
    </form>
  }
}

export default connect()(ATMForm)