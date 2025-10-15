import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./components/About/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Footer from "./components/Footer.jsx";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />

        <div className="main-area">
          <main className="main-content">
            <Routes>
              <Route path="/" element={<About />}></Route>
              <Route path="/projects" element={<Projects />}></Route>
              <Route path="/skills" element={<Skills />}></Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
