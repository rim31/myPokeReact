import React, { Component } from 'react';

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [],
    };
  }
  componentDidMount() {
      console.log(this.state.data)
  }
  render() {
    return (
      <div className="sectionHeros">
        <div className="container">
          <img src="https://cdn.intra.42.fr/users/oseng.jpg" alt="moi"/>
          <h1>Pokemon</h1>
        </div>
    </div>
    );
  }
}