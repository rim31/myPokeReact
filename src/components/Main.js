import React from 'react';
import './styles/App.css';

const Main = ({ pokemon }) => {
  const { id, name, sprite, type } = pokemon;

  return (
    <section className="detail-view">
      <img src={sprite} className='sprite-image' alt="sprite"/>
      <div className='data-wrapper'>
        <h1 className='data-name'>ID: {id} {name}</h1>
        <p className="data-char">Type: {type}</p>
      </div>
    </section>
  )
}

export default Main;

// class Main extends Component {
//   constructor() {
//     super();
//     this.state = {
//       data:[],
//       pokemon: {}
//     };
//   }
 
//   render() {
//     const { id, name, sprite, type } = this.state.pokemon;

//       return (
//         <div className="Main">
//           <header className="Main-header">
//             <h1 className="App-title">Welcome Master Pokemon</h1>
//           </header>
//           <section className="detail-view">
//             <img src={sprite} className='sprite-image' alt="sprite"/>
//             <div className='data-wrapper'>
//               <h1 className='data-name'>ID: {id} {name}</h1>
//               <p className="data-char">Type: {type}</p>
//             </div>
//           </section>
//         </div>
//       );
//     }
//   }

// export default Main;
