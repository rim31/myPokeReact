import React, { Component } from 'react';

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.handleNext   = this.handleNext.bind(this);
    this.handlePrev   = this.handlePrev.bind(this);
    this.state = {
        page          : 1
    };
  }
    //964 pokemons en tout : 964 / 20
    handleNext() {
        let page = (this.state.page > 49 ? 49 : this.state.page + 1);
        this.setState({page: page})
        console.log(this.state.page);
    }
    handlePrev() {
        let page = (this.state.page < 2 ? 1 : this.state.page - 1);
        this.setState({page: page})
        console.log(this.state.page);
    }
    // handleClick = () => {
    //     console.log('this vaut :', this);
    // }

  render() {
    console.log("state page :"+this.state.page);
    console.log("Pages : "+this.props.pages);

    return (
        <section>
            <button className="Prev" onClick={() => {this.handlePrev()}}>
                Précédent
            </button>
            <button className="Next" onClick={() => {this.handleNext()}}> Suivant
            </button>
            {/* <button onClick={this.handleClick}>
                Clique ici
            </button> */}
            <h1>{this.state.page}</h1>
        </section>
    );
  }
}