import React, { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD_ITEM') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const itemExistsInCart = state.items[existingItemIndex];

    let updatedItem;
    let latestListOfItems;

    if (itemExistsInCart) {
      updatedItem = {
        ...itemExistsInCart,
        amount: itemExistsInCart.amount + action.item.amount,
      };

      latestListOfItems = [...state.items];
      latestListOfItems[existingItemIndex] = updatedItem;
    } else {
      latestListOfItems = state.items.concat(action.item);
    }

    return {
      items: latestListOfItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'REMOVE_ITEM') {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const itemToRemove = state.items[existingItemIndex];
    const updatedTotalAmount = state.totalAmount - itemToRemove.price;

    let latestListOfItems;
    if (itemToRemove.amount === 1) {
      latestListOfItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...itemToRemove, amount: itemToRemove.amount - 1 };
      latestListOfItems = [...state.items];
      latestListOfItems[existingItemIndex] = updatedItem;
    }

    return {
      items: latestListOfItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === 'CLEAR') {
    return defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: 'ADD_ITEM',
      item: item,
    });
  };

  const removeItemToCartHandler = (id) => {
    dispatchCartAction({
      type: 'REMOVE_ITEM',
      id: id,
    });
  };
  const clearCartHandler = (id) => {
    dispatchCartAction({
      type: 'CLEAR',
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemToCartHandler,
    clearCart: clearCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
