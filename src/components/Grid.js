import React, { Component } from 'react';
import Pokemon from './Pokemon';

export default class Grid extends Component {
  constructor(props) {
    super(props);
    this.handleSelect   = this.handleSelect.bind(this);
    this.state = {
        imageCurrent  : '',
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
        this.setState({imageCurrent: selectedKey})
        // window.location = '/cards/'+selectedKey;
        fetch(`http://pokeapi.co/api/v2/pokemon/${selectedKey}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);
        console.log(pokemon);
        this.setState({imageCurrent: pokemon.sprite})
        this.setState({pokemon: pokemon})
      })
      .catch(err => console.log(err));
      };


  componentDidMount() {
        var url = 'https://pokeapi.co/api/v2/pokemon/?limit=10';

        fetch(url)
        .then((Response)=>Response.json())
        .then((myResponse) => {
            this.setState({
            data:myResponse.results
            })
        });
    };  
  render() {
    console.log(this.state.imageCurrent);
    console.log(this.state.pokemon.type);
    return (
      <div className="sectionHeros" >
        <div className="container">
          <h1>Pokemons</h1>
          <img src= {this.state.imageCurrent} alt="moi"/>
          <div>
            n° {this.state.pokemon.id}
          </div>
          <div>
            {this.state.pokemon.type}
          </div>
          <div className="flex-container" >
          {
            this.state.data.map((resultMap, key) =>
            <div className="herosCard" key={key} id={resultMap.name}  onClick={() => {this.handleSelect(resultMap.name)}}>
            {/* <div className="herosCard" key={key} id={resultMap.name} handleonclick={handleonclick}> */}
                <img className="imageGrid"  src={this.state.urlGif + resultMap.name + this.state.ext}  alt="" />
                <div>
                  <p>{resultMap.name}</p>
                </div>
            </div>)
          }
        </div>
        </div>
    </div>
    );
  }
}