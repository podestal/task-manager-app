import React from "react"
import Projects from "./components/Projects";
import Project from "./components/Project";
import CreateTaskForm from "./components/CreateTaskForm";
import { Route, Routes, Link } from "react-router-dom";

const App = () => {

  const [projects, setProjects] = React.useState([])

  return (
    <div>
      <h1>Task Manager</h1>
      <Routes>
        <Route path="/" element={<Projects />}/>
        <Route path="/project/:id" element={<Project />}/>
        <Route path="/tasks" element={<CreateTaskForm />} />
      </Routes>
    </div>
  );
}

export default App;
