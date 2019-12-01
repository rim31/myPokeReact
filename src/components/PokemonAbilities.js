import React, { Component } from 'react';
import Chip from '@material-ui/core/Chip';


export default class PokemonAbibilities extends Component {
   render() {
        // console.log("abilities:"+this.props.pokemonInfo.abilities);
        return (
            <div className="flex-container" >
                {/* {this.props.pokemonInfo.abilities[0].map((item,i) => <Chip key={i} label={item.name} />)} */}
            </div>
        );
      }
}