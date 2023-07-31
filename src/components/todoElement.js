export default function TodoList(props) {
  const id = props.todo.id;
  console.log(props.todo.id);

  return (
    <div className={props.todo.isCompleted ? "todoContainer" : "notCompleted"}>
      <div className="maintodo">
        <h4 className="title">{props.todo.title}</h4>
        <div className="description">{props.todo.description}</div>
      </div>
      <div className="icon_container">
        <div onClick={() => props.toggleComplete(id)}>
          <img src="/checked.png" alt="check" width="20px" />
        </div>
        <div onClick={() => props.deleteTodo(id)}>
          <img src="/trash-bin.png" alt="check" width="20px" />
        </div>
      </div>
    </div>
  );
}
