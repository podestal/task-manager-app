import React from "react"

import CreateProjectForm from "./components/CreateProjectForm";

const App = () => {

  const [projects, setProjects] = React.useState([])

  return (
    <div>
      <h1>Task Manager</h1>
      <CreateProjectForm />
    </div>
  );
}

export default App;
