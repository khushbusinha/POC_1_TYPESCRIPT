import React, {useState} from 'react';
import { TodoListItem } from './TodoListItem';
import { Todo, ToggleTodo, AddTodo } from './types';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';



const initialTodos: Array<Todo> = [
  {text: "Walk the dog", complete: true},
  {text: "Write App", complete: false}
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if(todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = newTodo => {
    setTodos([...todos, {text: newTodo, complete: false}]);
  }
  return (
     <React.Fragment>
       <TodoList todos={todos} toggleTodo={toggleTodo} />
       <AddTodoForm addTodo = {addTodo}/>
     </React.Fragment>
     )
};

export default App;
