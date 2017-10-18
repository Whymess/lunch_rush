import React, { Component, PropTypes } from 'react';
import Restaurant from './Restaurant';
import map from 'lodash/map';
import './Restaurants.css';
import {database} from './firebase';

class Restaurants extends Component {
  constructor(props) {
    super(props);
  }

  handleSelect(key){
    const currentUser = this.props.user;
    database.ref('/restaurants')
            .child(key)
            .child('votes')
            .child(currentUser.uid)
            .set(currentUser.displayName)
    }

  handleDeslect(key){
    const currentUser = this.props.user;
     database.ref('/restaurants')
            .child(key)
            .child('votes')
            .child(currentUser.uid)
            .remove();

  }

  render () {
     const {restaurants, user} = this.props;
    return (
   <section className="Restaurants">
        { map(restaurants, (restauarant, key) => (
          <Restaurant
            key={key}
            user={user}
            {...restauarant}
            handleSelect={() => this.handleSelect(key)}
            handleDeslect={() => this.handleDeslect(key)}
          />
        )) }
      </section>

    );
  }
}


export default Restaurants;
