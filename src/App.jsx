import { useState, useEffect} from 'react' 
import './App.css'
import CreateTodo from './components/CreateTodo'
import Todo from './components/Todo'

function App() {

  const [todos, setTodos] =useState([]); 
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/todo")
      .then(async res => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.statusText}`);
        }
        const json = await res.json();
        setTodos(json.todos);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        setError(error);
      });
  }, []);
  return (
    <>
       <CreateTodo/>
       <Todo todos={todos}/>
    </>
  )
}

export default App
