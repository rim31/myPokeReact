import React, { Component } from 'react';
import './styles/App.css';
import Grid from './Grid.js';
import Main from './Main.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      activeKey : '',
      data : [],
      now : '',
      allCharacters : [],
      myHeros : '',
      urlGif : 'https://projectpokemon.org/images/normal-sprite/',
      ext : '.gif',
    };
  }

  //function click on a card then display detail
  handleSelect(selectedKey) {
    this.setState({activeKey: selectedKey})
    window.location = '/cards/'+selectedKey;
  }

  // componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
  componentDidMount() {
     var url = 'https://pokeapi.co/api/v2/pokemon/?limit=964';

     fetch(url)
     .then((Response)=>Response.json())
     .then((myResponse) => {
       this.setState({
         data:myResponse.results
       })
     });
  }

  render() {
    // console.log(this.state.data);
    return (
      <div className="App">
        {/* <DetailView />
        <PokList /> */}
      <Main />
        <Grid allCharacters={this.state.allCharacters}/>
        <div className="flex-container">
          {
            this.state.data.map((resultMap, key) =>
            <div className="herosCard" key={key} id={resultMap.name} onClick={() => {this.handleSelect(resultMap.name)}}>
                <img className="imageGrid" src={this.state.urlGif + resultMap.name + this.state.ext}  alt="" />
                <div>
                  <p>{resultMap.name}</p>
                </div>
            </div>)
          }
        </div>
    </div>
    );
  }
}

export default App;

