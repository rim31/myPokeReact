import React, { Component } from 'react';
import './styles/Main.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Main extends Component {
  render() {
    return (
      <Card className="detail-view">
        <img src={'https://projectpokemon.org/images/normal-sprite/' + this.props.pokemons.name + '.gif'} className='sprite-image' alt="sprite"/>
         <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {this.props.pokemons.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <h4 className='data-name'>n°: {this.props.pokemons.id} </h4>
              <p className="data-char">Type: {this.props.pokemons.type}</p>
            </Typography>
          </CardContent>
        <CardActions>
          <Button size="small"  variant="outlined" disabled>
            Like
          </Button>
        </CardActions>
      </Card>
    );
  }
}