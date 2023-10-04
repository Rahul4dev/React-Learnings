import React from 'react';
import Todo from '../models/todo';

import classes from './TodoItem.module.css';

const TodoItem: React.FC<{ item: Todo; giveId: () => void }> = (props) => {
  return (
    <>
      <li className={classes.item} onClick={props.giveId}>
        {props.item.text}
      </li>
    </>
  );
};

export default TodoItem;
