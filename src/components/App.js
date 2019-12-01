import React, { Component } from 'react';
import './styles/App.css';
import Grid from './Grid.js';
// import Page from './Page.js';
import Main from './Main.js';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey     : '',
      data          : [],
      myHeros       : '',
      page          : 1,
      pokemon       : {}
    };
  }

  //964 pokemons en tout : 964 / 20
  handleNext() {
    let page = (this.state.page > 49 ? 49 : this.state.page + 1);
    this.setState({page: page})
    console.log(this.state.page);
  }
  handlePrev() {
      let page = (this.state.page < 1 ? 0 : this.state.page - 1);
      this.setState({page: page})
      console.log(this.state.page);
  }

  render() {
    return (
      <div className="App">
        <div>
          {/* <Page /> */}
          <button className="Prev" onClick={() => {this.handlePrev()}}>
                Précédent
          </button>
          <button className="Next" onClick={() => {this.handleNext()}}> Suivant
          </button>
          <div>{this.state.page}</div>
          <Grid pages={this.state.page} />
        </div>
      </div>
    );
  }
}

export default App;

