# Props Funneling
### How Props are transfered through arguments of the component functions of React App

  - Props is nothing but abbreviation for Properties of class object created in components.
  - Through ClassName="" , we pass properties of the components to the base application to render dynamic input/data into this prop.
  

//  Humans, an object conatining data, like gender, name, emp-status, and age. If we want to pass its values to get something out of it,we create the component.


```
export default function Humans() {
  return (
      // will take data as an object to its props.
      <div>
        <Employees persons = {Humans}/>
      </div>
  );
} 
```

  ## This function can now be used in Employees Component function


  ```
  export default function Employees(props) {
     return (
        // will pass the Humans values to its props
        <div>
            <h3>{props.persons[].Name}</h3>
            <p>Gender:{props.persons[].gender}</p>
            <Employee-type type={props.persons[].emp-status}/>
            <p>age{props.persons[].age}</p>
        </div>     
     );
  }
  ```

## Hence we can pass all the props down to the DOM component tree and extract out its features
  
