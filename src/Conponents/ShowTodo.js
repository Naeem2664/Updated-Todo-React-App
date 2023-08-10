import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";

const ShowTodo = ({ todos, setTodos }) => {
  const deleteTodo = (id) => {
    console.log(id);
    const filteredTodos = todos.filter((element, index) => {
      return index !== id;
    });
    setTodos(filteredTodos);
  };
  const [search, setSearch] = useState("");
  return (
    <div className="container Showtodo-Page">
      <div className="row header-in-show-todo ">
        <div className="col">
          <div className="search">
            <form>
              <input
                className="form-control bg-light"
                type="text"
                placeholder="Search Task"
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>
          </div>
        </div>
      </div>
      {todos
        ?.filter((todo) => {
          return search == " "
            ? todo
            : todo.title.toLowerCase().includes(search);
        })
        .map?.((todo, index) => {
          return (
            <div className="col-md-2 single-todo" key={index}>
              <h5>Title: {todo.title}</h5>
              <h5>Description</h5>
              <p>{todo.desc}</p>
              <h5>Time: {todo.time}</h5>
              <button
                onClick={(todo) => deleteTodo(index)}
                className="btn btn-danger"
              >
                <AiOutlineDelete />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ShowTodo;
