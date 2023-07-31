import { useState } from "react";

export default function AddTodo(props) {
  const [notEmpty, setNotEmpty] = useState(true);
  const [value, setValue] = useState({
    title: "",
    description: ""
  });
  console.log("value", value);

  function addValue(e) {
    const { name, value } = e.target;
    setValue((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
    setNotEmpty(true);
  }

  function handleSubmmit(e) {
    e.preventDefault();
    if (value.title.length === 0) {
      setNotEmpty(false);
    } else {
      setNotEmpty(true);
      props.toggleInput();
      props.addNewTodo(value.title, value.description);
    }
  }
  return (
    <div className="input_container">
      <input
        type="text"
        name="title"
        value={value.title}
        onChange={addValue}
        placeholder="Title"
      />
      <input
        type="text"
        name="description"
        value={value.description}
        onChange={addValue}
        placeholder="description"
      />
      <div>
        <div className="InputAddButton" onClick={handleSubmmit}>
          <img src="/plus (1).png" alt="plus" width="20px" height="20px" />
          <button> add to todo list </button>
        </div>
        {!notEmpty && (
          <div className="emptyError"> You can't add empty todo</div>
        )}
        <img src="/girlsillust.jpg" alt="plus" width="250" />
      </div>
    </div>
  );
}
