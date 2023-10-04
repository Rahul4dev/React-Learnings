import { useState } from 'react';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/todo';

function App() {
  // const InitialTodos = [new Todo('Learn React'), new Todo('Learn Typescript')];
  // For state definition, we have to give generic type of initial todo type so that it can store the new todos as an array of Todo objects. We can do this by giving either an initial todo array with that type which typescript will eventually infer, but is we do not have such a type in the initial todo, we should pass the generic type as a model parameter.
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    // here since we are updating the state based on the previous state, we need to use function form in the state updating function. where we use previous state to concatenate with the new/current state without mutating the previous array.
    setTodos((prev) => {
      return prev.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} toRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;
