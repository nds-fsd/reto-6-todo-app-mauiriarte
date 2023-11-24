import { Link } from "react-router-dom";
import styles from "./task.module.css";

const Task = (props) => {
  const task = props.item;
  const { item, onToggleCompleted } = props;
  const handleCheckboxChange = () => {
    onToggleCompleted(task.id);
  };
  
  return (
    <Link to={`${task.id}`}>
      <div className={styles.card}>
        <p>{task.title}</p>
        <input className="check"
          type="checkbox"
          checked={item.completed}
          onChange={handleCheckboxChange}
        />
      </div>
    </Link>
  );
};

export default Task;
