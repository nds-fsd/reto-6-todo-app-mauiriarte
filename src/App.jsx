import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import { TaskNotFound } from "./components/TaskNotFound";
import { TaskDetail } from "./components/TaskDetail";
import { Routes, Route, Link } from "react-router-dom";



function App() {
  const [reload, setReload] = useState(false);

  const reloadPage = () => {
    setReload(!reload);
  };

  return (
    <div>
      <h1 className="app-logo">
        <Link to="/">TaskMaster3000</Link>
      </h1>
      <div className="main-router">
        <Routes>
          <Route path="/" element={<TaskList reload={reload} />}>
            <Route
              path=":taskIdSlug"
              element={<TaskDetail />}
            />
            <Route
              path="create"
              element={<AddTask reloadPage={reloadPage} />}
            />
          </Route>
          <Route
            path="/todos/create/confirmation"
            element={<h3>Your new task has been created successfully!</h3>}
          />
          <Route path="*" element={<TaskNotFound/>}/>
        </Routes>
        {/* <MyRouter /> */}
      </div>
    </div>
  );
}

export default App;
