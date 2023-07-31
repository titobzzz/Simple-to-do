import "./styles.css";
import { React, useEffect, useState } from "react";
import Header from "./components/header";
import AddTodo from "./pages/addTodo";
import Rendering from "./pages/rendering";
import { nanoid } from "nanoid";

export default function App() {
  const [input, setInput] = useState(false);
  // toggle inbetween input and render pages
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  function toggleInput() {
    setInput((prevInput) => !prevInput);
  }

  function addNewTodo(title, description) {
    setTodoList((prevtodo) => [
      {
        title: title,
        description: description,
        isCompleted: false,
        id: nanoid()
      },
      ...prevtodo
    ]);
  }

  function deleteTodo(id) {
    setTodoList(todoList.filter((item) => item.id !== id));
  }

  function toggleComplete(id) {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isCompleted: !item.isCompleted
          };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <div className="App_Container">
      <Header />
      <div className="App">
        {input ? (
          <AddTodo toggleInput={toggleInput} addNewTodo={addNewTodo} />
        ) : (
          <Rendering
            key={todoList.id}
            todo={todoList}
            toggleInput={toggleInput}
            deleteTodo={deleteTodo}
            toggleComplete={toggleComplete}
          />
        )}
      </div>
    </div>
  );
}
