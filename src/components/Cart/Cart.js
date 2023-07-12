import React, { useContext, useState } from 'react';

import CartContext from '../../context/cart-context';
import CartItem from './CartItem';
import Modal from '../UI/Modal/Modal';
import Checkout from './Checkout';

import styles from './Cart.module.css';

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };
  const addItemToCartHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    const response = await fetch(
      'https://food-ordering-app-2c372-default-rtdb.asia-southeast1.firebasedatabase.app/order.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: cartContext.items,
        }),
      }
    );

    if (!response.ok) {
      throw new Error('Failed to place the order! Please try again');
    }
    setIsSubmitting(false);
    setDidSubmit(true);
    cartContext.clearCart();
  };

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartContext.items.map((item, i) => (
        <CartItem
          key={item.id + '-' + i}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeCartItemHandler.bind(null, item.id)}
          onAdd={addItemToCartHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalActions = (
    <div className={styles.actions}>
      <button className={styles['button-alt']} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;
  const didSubmitModalContent = (
    <>
      <p> Successfully sent the Order! Your order will be there in a moment.</p>
      <div className={styles.actions}>
        <button className={styles.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </>
  );
  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;
