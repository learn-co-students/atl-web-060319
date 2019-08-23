import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import { getSushi } from './services/backend';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    getSushi().then(data => this.props.dispatch({
      type: 'GET_SUSHI',
      data
    }));
  }

  render() {
    return (
      <div className="app">
        <SushiContainer />
        <Table />
      </div>
    );
  }
}

export default connect()(App);