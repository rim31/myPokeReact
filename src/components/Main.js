import React, { Component } from 'react';

export default class Main extends Component {

  render() {
    return (
      <section className="detail-view">
      <img src={this.props.sprite} className='sprite-image' alt="sprite"/>
      <div className='data-wrapper'>
        <h1 className='data-name'>n°: {this.props.id} : {this.props.name}</h1>
        <p className="data-char">Type: {this.props.type}</p>
      </div>
    </section>
    );
  }
}