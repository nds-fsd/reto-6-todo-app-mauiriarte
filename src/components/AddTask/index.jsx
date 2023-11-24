import { useState } from "react";
import styles from "./AddTask.module.css";
import { useNavigate } from "react-router-dom";

const CreateTodo = (props) => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const body = {
      name: title,
    };
    const options = {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate("/confirmation");
      });
  };

  return (
    <>
    <div>
      <h3>Add a new task!</h3>
      <label htmlFor="title">
        <input
          required
          minLength="1"
          type="text"
          value={title}
          placeholder="What task do you want to add?"
          onChange={handleTitle}
        />
      </label>
      
    </div>
    <button onClick={handleSubmit}>Save</button>
    </>
  );
};

export default CreateTodo;
