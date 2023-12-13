import React from "react"

import CreateProjectForm from "./components/CreateProjectForm";
import CreateTaskForm from "./components/CreateTaskForm";

const App = () => {

  const [projects, setProjects] = React.useState([])

  return (
    <div>
      <h1>Task Manager</h1>
      <CreateTaskForm />
    </div>
  );
}

export default App;
