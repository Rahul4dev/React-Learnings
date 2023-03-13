# How to pass Props from Child to Parent?

_*Object: To pass the prop from child to parent so that function which is executed in the parent component can get the argument from the child component*_

## tltr: We can pass the data from the child to parent via prop of the child declared in the parent component and then that prop can be used to set the data from the parent using that function or object which require that object data.

**Note: However we can't by-pass any intermediate component comes b/t these child and parent component. props must be pass through one-by-one**
## Code for the parent component:
### for Example: we want to pass the argument of a function onSave() which is declared in the parent, from the child component:
```javascript
    export default function MyAccount() {
      function SaveAccountData(enteredAccountData) {
        const accountData = {
            ...enteredAccountData,
            id: Math.random().toString(),
        };
        console.log(accountData);
      }
    
      return (
          <div className="account-details">
            <AccountFrom onSave={SaveAccountData} />
          </div>
      );
    }
```
  - Here: we want to get the enteredAccountData from the AccountFrom component which is direct child of the MyAccount component.
  - So How can we get the account details from that component? We will use the props which points to the function argument which is already be placed by the AccountForm component "onSave={}".
  - onSave={} , will point to the function, which required an argument which we can pass through this prop in the AccountFrom component.

  ## So the AccountFrom Code goes like this:
  
```javascript
    export default function AccountFrom (props) {
        const accountDetails = {
            AcHolder: name,
            AcNumber: number,
            AcDOB: new Date(),
            AcAmount: amount,
        };
        
        props.onSave(accountDetails);
        
        return (
          <form></form>
        )  
    }

```
  - Here: Event we do not have the onSave() declared, we can use this function to pass the argument to it as it was actually a pointer of the parent component function passed from the prop to the child component.
  - This pattern is most importent prop flow used t opass the data from the child to parent.

  
