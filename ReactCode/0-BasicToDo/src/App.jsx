import { useState } from 'react'
import './App.css'

export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = () => {
    const editValue = edit && todos.find((todo) => todo.id === edit.id);
    // console.log("submit", editValue);
    if (editValue) {
      editValue.text = todo;
      setTodos([...todos]);
      setEdit(null);
    } else {
      todo && setTodos([{ id: Date.now(), text: todo, completed: false }, ...todos]);
    }
    setTodo("");
  };
  const handleEdit = (e) => {
    const todo = todos.find((todo) => todo.id === +e.target.id);
    // console.log("edit", todo);
    setTodo(todo.text);
    setEdit(todo);
  };

  const filteredTasks = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="App">
      <h1>TO DO APP</h1>
      <div className="box">
        <input
          type="text"
          name="todo"
          value={todo}
          onChange={handleChange}
          placeholder="Add To Do"
        />
        <input type="button" value="Add" onClick={handleSubmit} />
      </div>
      <div className="list">
        <input
          type="text"
          name="search"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search To Do"
        />
        {filteredTasks &&
          filteredTasks.map((todo) => (
            <div key={todo.id}>
              <span>{todo.text}</span>
              <button onClick={handleEdit} id={todo.id}>
                Edit
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

