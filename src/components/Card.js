import { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div>
      <ul>
      <li>Message: {props.card.message}</li>
      <li>Likes: {props.card.likes_count}</li>
      <li onClick={() => props.onLike(props.card)}>+1</li>
      <li onClick={() => props.onCardDelete(props.card)}>Delete</li>
      </ul>
    </div>
  );
};

// Card.propTypes = {
//   id: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   owner: PropTypes.string.isRequired,
//   onBoardSelect: PropTypes.func,
// };

export default Card;