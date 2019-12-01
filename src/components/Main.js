import React from 'react';
import './styles/App.css';

const Main = ({ pokemon }) => {
  const { id, name, sprite, type } = pokemon;

  return (
    <section className="detail-view">
      <img src={sprite} className='sprite-image' alt="sprite"/>
      <div className='data-wrapper'>
        <h1 className='data-name'>n°: {id} : {name}</h1>
        <p className="data-char">Type: {type}</p>
      </div>
    </section>
  )
}

export default Main;