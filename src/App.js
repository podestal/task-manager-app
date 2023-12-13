import React from "react"

import Projects from "./components/Projects";

const App = () => {

  const [projects, setProjects] = React.useState([])

  return (
    <div>
      <h1>Task Manager</h1>
      <Projects />
    </div>
  );
}

export default App;
