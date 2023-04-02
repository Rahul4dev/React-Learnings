# Todo App: Quick Style
Repo includes react codes, concepts, and projects created while learning.

_*Description:*_
  - In this project we can see an input field and the todos
  - Through react, we have created the page which add the new todo
  - If we click the todo it get deleted as we have completed that todo.
  
_*Learning:*_
  - For styling we have adopted multiple types: inline style, through styled-components and through CSS modules
  - In inline-styles: we add style={} prop inside the element and give specific styles to that element, these styles should be an object/json from wrapped inside {} and uses camelCase for the property names. like styles={{backgroundColor: '#FFF'}}
  - In styled-component, we install styled-component package, and use them inside the js/jsx file to style the specific element. However each element created by styled-component will become a Component in itself as it has its own js code and styling. for eg check out button component and contentInput component folder.
  - In CSS-module, we use same old css file for the styling the respective js code, but import it as a module. Hence we rename the css file into module.css file like button.css will become button.module.css . And we import it as
  ``` javascipt
  
  import styles from './button.modules.css';
  
  // use it inside the element
  
  <button styles={styles.button} >Click</button>
  
  ```
  
  _*Project Overview*_
  
  ![TodoReactStylingP1](https://user-images.githubusercontent.com/114183358/229347924-e9ee69d9-8fc8-4476-9364-2da7f05e87f0.png)
