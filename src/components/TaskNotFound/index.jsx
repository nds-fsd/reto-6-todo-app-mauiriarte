import { Link } from "react-router-dom";

export const TaskNotFound = () => {
  return (
    <div>
      <h2>The task you're looking for doesn't exists!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
};
