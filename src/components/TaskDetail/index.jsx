import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./TaskDetail.module.css";
import { TaskNotFound } from "../TaskNotFound";
import 'ldrs/ring';
import taskData from "../../assets/data.json";

export const TaskDetail = (props) => {
  let params = useParams();

  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const taskFromLocalData = taskData.find((t) => t.id === Number(params.taskID));

    setTimeout(() => {
      if (taskFromLocalData) {
        setTask(taskFromLocalData);
      }
      setLoading(false);
    }, 1000);
  }, [params.taskID]);

  const handleCheckboxChange = () => {
    setTask((prevTask) => ({ ...prevTask, completed: !prevTask.completed }));
  };

  if (loading) {
    return (
      <div>
        <h2>
          <l-line-spinner
            size="40"
            stroke="3"
            speed="1"
            color="blue"
          ></l-line-spinner>
        </h2>
      </div>
    );
  }

  if (!task) return <TaskNotFound />;

  return (
    <div className="detailed-card">
      <h2>{task.title}</h2>
      <button className="deletetask">Delete task</button>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={handleCheckboxChange}
      />
    </div>
  );
};