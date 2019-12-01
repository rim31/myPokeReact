import React, { Component } from 'react';
import Pokemon from './Pokemon';
import Main from './Main';

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
        urlPng        : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
        extGif        : '.gif',
        extPng        : '.png',
        pokemon       : {},
    };
  }

    //function click on a card then display detail
    handleSelect(selectedKey) {
        this.setState({imageCurrent: selectedKey})
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

  render() {
    console.log("PAGES:"+this.props.page);
    console.log(this.state.imageCurrent);
    console.log(this.state.data);
    return (
      <div className="sectionHeros" >
        <div className="container">
          {/* <h1>Pokemons</h1>
          <img src= {this.state.imageCurrent} alt="moi"/>
          <div>
            n° {this.state.pokemon.id}
          </div>
          <div>
            {this.state.pokemon.type}
          </div> */}
          <Main pokemons={this.state.pokemon} />
          <div className="flex-container" >
          {
            this.props.pokemons.map((resultMap, key) =>
            <div className="herosCard" key={key} id={resultMap.name}  onClick={() => {this.handleSelect(resultMap.name)}}>
            {/* <div className="herosCard" key={key} id={resultMap.name} handleonclick={handleonclick}> */}
                {/* <img className="imageGrid"  src={this.state.urlGif + resultMap.name + this.state.extGif}  alt={resultMap.name} /> */}
                <img className="imageGrid"  src={this.state.urlPng + (20*this.props.page+key+1) + this.state.extPng}  alt={resultMap.name} />
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