import React, { useEffect, useState } from "react";
import EditToDo from "./EditToDo";

const ListToDo = () => {
  const [todos, setTodos] = useState([]);
  const getToDos = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/todos`);
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToDos();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/delete-todo/${id}`,
        { method: "DELETE" }
      );
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.length ? todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo?.description}</td>
              <td><EditToDo toDo = {todo}/></td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          )):(
            <h1>Add Something!</h1>
          )}
        </tbody>
      </table>
    </>
  );
};

export default ListToDo;
