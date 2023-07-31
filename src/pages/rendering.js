import { useEffect, useState } from "react";
import TodoElement from "../components/todoElement";

export default function Rendering(props) {
  const [showList, setShowlist] = useState(false);
  console.log("todo,", props.todo);

  useEffect(() => {
    if (props.todo.length === 0) {
      setShowlist(false);
    } else {
      setShowlist(true);
    }
  }, [props.todo.length]);

  const mappedList = props.todo.map((item) => {
    return (
      <TodoElement
        toggleComplete={props.toggleComplete}
        deleteTodo={props.deleteTodo}
        todo={item}
      />
    );
  });

  return (
    <div className="RenderingPage">
      {showList ? (
        <div className="mappedList">{mappedList}</div>
      ) : (
        <img
          src="/ilust.jpg"
          alt="renderingimage"
          width="360px"
          height="400px"
        />
      )}
      <div className="InputAddButton" onClick={() => props.toggleInput()}>
        <img src="/add.png" alt="add" width="30px" />
        <button>Add new todo</button>
      </div>
    </div>
  );
}
