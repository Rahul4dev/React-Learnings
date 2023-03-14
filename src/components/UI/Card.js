import "./Card.css";

function Card(props) {
  const classes = "card " + props.className; // whiteSpace after 'Card_' is important otherwise it could not add other className.

  return <div className={classes}>{props.children} </div>;
}

export default Card;
