import React from 'react';

import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className; // whiteSpace after 'Card_' is important otherwise it could not add other className.

  return <div className={classes}>{props.children} </div>;
}

export default Card;
