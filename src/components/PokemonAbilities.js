import React, { Component } from 'react';

export default class PokemonAbibilities extends Component {
   render() {
        console.log("abilities:"+this.props.pokemonInfo.abilities);
        return (
              <div className="flex-container" >
              {/* {
                this.props.pokemonInfo.abilities.map((resultMap, key) =>
                <div className="herosCard" key={key} >
                    <p>{resultMap.name}</p>
                </div>)
              } */}
            </div>
        );
      }
}