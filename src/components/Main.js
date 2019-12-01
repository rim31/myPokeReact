import React, { Component } from 'react';

export default class Main extends Component {

  render() {
    return (
      <section className="detail-view">
      {/* <img src={this.props.pokemons.sprite} className='sprite-image' alt="sprite"/> */}
      <img src={'https://projectpokemon.org/images/normal-sprite/' + this.props.pokemons.name + '.gif'} className='sprite-image' alt="sprite"/>
      <div className='data-wrapper'>
        <h1 className='data-name'>n°: {this.props.pokemons.id} : {this.props.pokemons.name}</h1>
        <p className="data-char">Type: {this.props.pokemons.type}</p>
      </div>
    </section>
    );
  }
}