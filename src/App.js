import React from "react"
import { Route, Routes, Link, Router } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import TodosPage from "./pages/TodosPage";
import ProjectsPage from "./pages/ProjectsPage";
import NotesPage from "./pages/NotesPage";
import EditNotePage from "./pages/EditNotePage";
import Note from "./components/notes/Note";

const App = () => {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/projects" element={<ProjectsPage />}/>
        <Route path="/todos" element={<TodosPage />}/>
        <Route path="/notes" element={<NotesPage />}/>
        <Route path="/notes/:id" element={<Note />}/>
      </Routes>
    </div>
  );
}

export default App;
