// import SimpleInput from './components/SimpleInput';
// import SimpleInputRefactored from './components/SimpleInputRefactored';
import SimpleInputWithHook from './components/SimpleInputWithHook';
import BasicForm from './components/BasicForm';
import BasicFormWithHook from './components/BasicFormWithHook';
import SignupForm from './components/Form/SignupForm';
import Basic from './components/FormikForm/Formik';
function App() {
  return (
    <div className="app">
      <h1>Forms and Types</h1>
      <h3>1. Basic Form with simple input and submit button</h3>
      <BasicForm />
      <h3>2. Form using state management and simple Validation logic</h3>
      <SimpleInputWithHook />
      <h3>
        3. Form using Custom input Hook for state management and validations
      </h3>
      <BasicFormWithHook />
      <h3>4. Form using Custom Form Hook</h3>
      <SignupForm />
      <h3>5. Form created by 3rd party Library 'Formik'</h3>
      <Basic />
    </div>
  );
}

export default App;
