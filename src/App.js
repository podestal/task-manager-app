import React from "react"
import { Route, Routes, Link, Router } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import TodosPage from "./pages/TodosPage";
import ProjectsPage from "./pages/ProjectsPage";
import NotesPage from "./pages/NotesPage";
import EditNotePage from "./pages/EditNotePage";
import Note from "./components/notes/Note";
import ProjectPage from "./pages/ProjectPage";

const App = () => {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/projects" element={<ProjectsPage />}/>
        <Route path="/projects/:id" element={<ProjectPage />}/>
        <Route path="/todos" element={<TodosPage />}/>
        <Route path="/notes" element={<NotesPage />}/>
        <Route path="/notes/:id" element={<EditNotePage />}/>
      </Routes>
    </div>
  );
}

export default App;
