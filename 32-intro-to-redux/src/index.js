import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';

import "./index.css";
import logo from "./logo.svg";
import "./App.css";

const initialState = { count: 17 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INC": {
      return { count: state.count + 1 }
    }
    case "DEC": {
      let amount = action.amount || 1;
      return { count: state.count - amount }
    }
    case "DOUBLE": {
      return { count: state.count * 2 }
    }
  }
  return state;
}

const store = createStore(
  reducer,
  // Check the browser for redux dev tools and enable them if found.
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <Counter />
    </div>
  );
}

class Header extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  renderDescription = () => {
    const count = store.getState().count;
    const remainder = count % 5;
    const upToNext = 5 - remainder;
    return `The current count is less than ${count + upToNext}`;
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
        <h3>{this.renderDescription()}</h3>
      </header>
    );
  }
}

class Counter extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    return (
      <div className="Counter">
        <h1>{store.getState().count}</h1>
        <button onClick={() => store.dispatch({ type: 'DEC', amount: 5 })}> - 5 </button>
        <button onClick={() => store.dispatch({ type: 'DEC' })}> - </button>
        <button onClick={() => store.dispatch({ type: 'INC' })}> + </button>
        <button onClick={() => store.dispatch({ type: 'DOUBLE' })}> * 2 </button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
