import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import './Restaurant.css';

class Restaurant extends Component {
  render () {
     const {name, handleSelect, handleDeslect} = this.props
    return (
      <article className="Restaurant">
        <h3> {name} </h3>
        <button onClick={handleSelect}> 
            Yea, I'd go there.... 
        </button>
        <button className="destructive" onClick={handleDeslect}> 
          Nah, nevermind
        </button>
      </article>
    );
  }
}

Restaurant.propTypes = {
  name: PropTypes.string,
  votes: PropTypes.object,
  user: PropTypes.object,
  handleSelect: PropTypes.func,
  handleDeselect: PropTypes.func
};

export default Restaurant;
