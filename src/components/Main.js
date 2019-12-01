import React, { Component } from 'react';
import './styles/App.css';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      data:[],
    }
  }
  componentDidMount() {
  }
  render() {
    return (
      <div className="Main">
        <header className="Main-header">
          <h1 className="App-title">Welcome Master Pokemon</h1>
        </header>
      </div>
    );
  }
}

export default Main;
