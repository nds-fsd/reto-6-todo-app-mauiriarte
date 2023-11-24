import React, { useEffect, useState } from "react";
import Task from "../Task";
import { Link, Outlet } from "react-router-dom";
import styles from "./TaskList.css";
import tasksData from "../../assets/data.json";

const TaskList = (props) => {
  const reload = props.reload;
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData.slice(0, 5));
  }, [reload]);

  const handleToggleCompleted = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div>
      <div className="biggap">
        <h1>
          Inbox
        </h1>
        <button className="newbutton">
            <Link to="create">Add task</Link>
          </button>
      </div>
      <div className="container">
        <div className="tasks">
          {tasks && tasks.map((p) => <Task key={p.id} item={p} onToggleCompleted={handleToggleCompleted} />)}
        </div>
        <div className="child-outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default TaskList;