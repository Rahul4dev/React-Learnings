import React, { Fragment } from 'react';

import styles from './Header.module.css';
import HeaderCartButton from '../../UI/Buttons/HeaderCartButton';

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <img
            src="/Just_Eat-Logo.wine.png"
            alt="logo"
            className={styles.logo}
          />
        </div>
        <HeaderCartButton onClick={props.onShowCart}>Button</HeaderCartButton>
      </header>
      <div className={styles['main-image']}>
        <img
          src="https://images.unsplash.com/photo-1521917441209-e886f0404a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MzAzOTYxNA&ixlib=rb-4.0.3&q=80&w=1080"
          alt="meals"
        />
      </div>
    </Fragment>
  );
};

export default Header;
