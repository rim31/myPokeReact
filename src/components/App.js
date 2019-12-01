import React, { Component } from 'react';
import './styles/App.css';
import Grid from './Grid.js';
// import Details from './Details.js';
import Main from './Main.js';
import Pokemon from './Pokemon';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleSelect   = this.handleSelect.bind(this);
    // this.handleonclick = this.handleonclick.bind(this);

    this.state = {
      activeKey     : '',
      data          : [],
      allCharacters : [],
      myHeros       : '',
      urlGif        : 'https://projectpokemon.org/images/normal-sprite/',
      ext           : '.gif',
      pokemon       : {}
    };
  }

  //function click on a card then display detail
  handleSelect(selectedKey) {
    this.setState({activeKey: selectedKey})
    // window.location = '/cards/'+selectedKey;
  };

  // handleonclick(id) {
  //   console.log(id);
  // }
  

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
  };

  render() {
    // console.log(this.state.data);
    return (
      <div className="App">
        <Main pokemon={this.state.pokemon} />
        {/* <Details /> */}
        <Grid allCharacters={this.state.allCharacters} />
        {/* <div className="flex-container" >
          {
            this.state.data.map((resultMap, key) =>
            <div className="herosCard" key={key} id={resultMap.name}  onClick={() => {this.handleSelect(resultMap.name)}}>
                <img className="imageGrid"  handleonclick={this.handleonclick} src={this.state.urlGif + resultMap.name + this.state.ext}  alt="" />
                <div>
                  <p>{resultMap.name}</p>
                </div>
            </div>)
          }
        </div> */}
      </div>
    );
  }
}

export default App;

