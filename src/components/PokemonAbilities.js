import React, { Component } from 'react';
// import Chip from '@material-ui/core/Chip';

const test = {
    "abilities": [
        {
          "ability": {
            "name": "lightning-rod",
            "url": "https://pokeapi.co/api/v2/ability/31/"
          },
          "is_hidden": true,
          "slot": 3
        },
        {
          "ability": {
            "name": "static",
            "url": "https://pokeapi.co/api/v2/ability/9/"
          },
          "is_hidden": false,
          "slot": 1
        }
      ]
}

export default class PokemonAbibilities extends Component {
   render() {
       let abilities = (this.props.pokemonInfo.abilities ? this.props.pokemonInfo.abilities : null);
       console.table(abilities);
       let ability = test.abilities.map((item,i) => (
    //    let ability = abilities.map((item,i) => (
        <div key={i} label={item.ability.name} >{item.ability.name}</div>));
        return (
            <div>
                {/* {ability} */}              
            </div>
        );
      }
}