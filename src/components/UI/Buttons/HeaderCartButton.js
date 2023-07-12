import React, { useContext, useEffect, useState } from 'react';

import CartIcon from '../../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';
import CartContext from '../../../context/cart-context';

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartContextData = useContext(CartContext);

  const { items } = cartContextData;

  const totalCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  const btnStyles = `${styles.button} ${btnIsHighlighted ? styles.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <div>
      <button className={btnStyles} onClick={props.onClick}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{totalCartItems}</span>
      </button>
    </div>
  );
};

export default HeaderCartButton;
