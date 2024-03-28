import React, { useState, useEffect } from "react";
import axios from "axios";

interface Todo {
    id: number;
    title: string;
    description: string;
    due: string;
    completed: boolean;
}


function WorkingWithArrays() {
    const [todo, setTodo] = useState<Todo>({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
    const [errorMessage, setErrorMessage] = useState(null);
    const API = "http://localhost:4000/a5/todos";

    const [todos, setTodos] = useState<Todo[]>([]);
    const fetchTodos = async () => {
        const response = await axios.get(API);
        setTodos(response.data);
    };
    const fetchTodoById = async (id: number) => {
        const response = await axios.get(`${API}/${id}`);
        setTodo(response.data);
    };
    const removeTodo = async (todo: Todo) => {
        const response = await axios
            .get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };

    const createTodo = async () => {
        const response = await axios.get(`${API}/create`);
        setTodos(response.data);
      };

    const updateTitle = async () => {
        const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
      };
    
    const postTodo = async () => {
        const response = await axios.post(API, todo);
        setTodos([...todos, response.data]);
    };

    const updateTodo = async () => {
        try {
          const response = await axios.put(
            `${API}/${todo.id}`, todo);
          setTodos(todos.map((t) => (
            t.id === todo.id ? todo : t)));
        } catch (error) {
          console.log(error);
          if (axios.isAxiosError(error)) {
            setErrorMessage(error.response?.data.message);
        }
        }
    };
    
    

      const deleteTodo = async (todo: Todo) => {
        try {
            const response = await axios.delete(`${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error) {
            console.log(error);
            if (axios.isAxiosError(error)) {
                setErrorMessage(error.response?.data.message);
            }

        }

    };
      
    useEffect(() => {
      fetchTodos();
    }, []);
  
    
    
    return (
      <div>
        <h3>Working with Arrays</h3>
        <h4>Retrieving Arrays</h4>
        <a href={API}>
          Get Todos
        </a>
      <h4>Retrieving an Item from an Array by ID</h4>
            <input type="number" value={todo.id}
                onChange={(e) => setTodo({
                    ...todo,
                    id: parseInt(e.target.value)
                })} />

                
            <a href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a>

            <h3>Filtering Array Items</h3>
            <a href={`${API}?completed=true`}>
                Get Completed Todos
            </a>

            <h3>Creating new Items in an Array</h3>
            <a href={`${API}/create`}>
                Create Todo
            </a>
            

            <h3>Deleting from an Array</h3>
            <input type="number" value={todo.id}
                onChange={(e) => setTodo({
                    ...todo,
                    id: parseInt(e.target.value)
                })} />
            <a href={`${API}/${todo.id}/delete`}>
                Delete Todo with ID = {todo.id}
            </a>

            
            <h3>Updating an Item in an Array</h3>

            <input type="text" value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })} />
            <a href={`${API}/${todo.id}/title/${todo.title}`} >
                Update Title to {todo.title}
            </a><br />
            <input type="number" value={todo.id}
                onChange={(e) => setTodo({
                    ...todo,
                    id: parseInt(e.target.value)
                })} />


            <a href={`${API}/${todo.id}/completed/true`}>
                Complete ToDo with ID = {todo.id}
            </a><br />
            <input type="number" value={todo.id}
                onChange={(e) => setTodo({
                    ...todo,
                    id: parseInt(e.target.value)
                })} />
            <input type="text" value={todo.description}
                onChange={(e) => setTodo({
                    ...todo,
                    description: e.target.value
                })} />
            <a href={`${API}/${todo.id}/description/${todo.description}`}>
                Update Describe ToDo with ID = {todo.id}
            </a>
            <h3>Posting data</h3>
            <input type="text" value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })} />
            <textarea value={todo.description}
                onChange={(e) => setTodo({
                    ...todo,
                    description: e.target.value
                })} />
            <input value={todo.due} type="date"
                onChange={(e) => setTodo({
                    ...todo, due: e.target.value
                })} />
            <label>
                <input type="checkbox" checked={todo.completed}
                    onChange={(e) => setTodo({
                        ...todo, completed: e.target.checked
                    })} />
                Completed
            </label>
            <button onClick={postTodo} className="btn btn-primary ms-2"> Post Todo </button>

            <button onClick={updateTodo} className="btn btn-primary ms-2">
                Update Todo
            </button>
            <br/>
            <button onClick={createTodo}  className="btn btn-primary ms-2">
                Create Todo
            </button>
            <button onClick={updateTitle} className="btn btn-secondary ms-2">
                Update Title
            </button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item">
                        <input checked={todo.completed}
                            type="checkbox" readOnly />
                        {todo.title}
                        <p>{todo.description}</p>
                        <p>{todo.due}</p>
                        <button className="btn btn-info" onClick={() => fetchTodoById(todo.id)} >
                            Edit
                        </button>
                        {/* <button className="btn btn-danger" onClick={() => removeTodo(todo)} >
                            Remove
                        </button> */}
                          <button onClick={() => deleteTodo(todo)}
    className="btn btn-danger ms-2">
    Delete
  </button>
                        {todo.title}
                    </li>
                ))}

            </ul>
            {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}











      </div>
    );
  }
  export default WorkingWithArrays;

