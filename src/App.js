import { Container, Navbar, Nav } from 'react-bootstrap';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Aboutus from './pages/Aboutus';
import Qualification from './pages/Qualification';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contactus from './pages/Contactus';
// import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import styled from "styled-components";

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/qualification" element={<Qualification />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
