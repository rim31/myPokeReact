import React, { Component } from 'react';
import './styles/App.css';
import Grid from './Grid.js';
import Button from '@material-ui/core/Button';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data          : [],//response fetch url
      myHeros       : '',// favorites
      page          : 0,// number of page
      allPokemons   : [],// array of pokemons according pages
      pokemon       : {} //object pokemon for details display
    };
  }

  //964 pokemons en tout : 964 / 20
  componentDidMount() {
    var url = 'https://pokeapi.co/api/v2/pokemon/?limit=964';

    fetch(url)
    .then((Response)=>Response.json())
    .then((myResponse) => {
        this.setState({
        data:myResponse.results
        })
    })
    .then(() => 
      this.setState({allPokemons: this.state.data.slice(0, 20)})
    );
};  
  handleNext() {
    let page = (this.state.page > 49 ? 49 : this.state.page + 1);
    this.setState({page: page})
    this.setState({allPokemons: this.state.data.slice(20 * (page), (20 * (page +1)))})
    console.log(this.state.page);
  }
  handlePrev() {
    let page = (this.state.page < 1 ? 0 : this.state.page - 1);
    this.setState({allPokemons: this.state.data.slice(20 * (page), (20 * (page+1)))})
    this.setState({page: page})
    console.log(this.state.allPokemons);
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.page > 0 ? <Button onClick={() => {this.handlePrev()}} variant="contained" color="primary">Précédent</Button> : null}
          {this.state.page < 49 ? <Button onClick={() => {this.handleNext()}} variant="contained" color="primary">Suivant</Button> : null}
          <div>page : {this.state.page}</div>
          <Grid pokemons={this.state.allPokemons} page={this.state.page}/>
        </div>
      </div>
    );
  }
}

export default App;

