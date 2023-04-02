import React from 'react';

// import styled from 'styled-components';

import styles from './Button.module.css';
// used styled-component to create button. here styled is an object where button is a special method, which do not take () but ``; inside the backtick, we can give the styles to the button component, as the styled object returns a component. this is why we have used caps for the name if variable name Button.

// Pros is use of styled components: Since previously we use css selector to style the elements which are not specific to that element as it can be spilled on other elements with the same class selector. With styled components, we do not have to care about the class selector names as the styled-components object will give us the unique class names of the components we make and other elements we nest inside the component. So every component and element will have a unique class hence the style properties will not spill over unto other components.

// We can have multiple buttons all will have different classes.

// const Button = styled.button`
//   font: inherit;
//   width: 100%;
//   padding: 0.5rem 1.5rem;
//   border: 1px solid #8b005d;
//   color: white;
//   background: #8b005d;
//   box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
//   cursor: pointer;

//   @media (min-width: 768px) {
//     width: auto;
//   }

//   &:focus {
//     outline: none;
//   }

//   &:hover,
//   &:active {
//     background: #ac0e77;
//     border-color: #ac0e77;
//     box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
//   }
// `;

const Button = (props) => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
