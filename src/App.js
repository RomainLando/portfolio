import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/home/Home';
import BackgroundGenerator from './components/javascript/background-generator/BackgrounGenerator';
import Metronome from './components/javascript/metronome/Metronome';
import Pokedex from './components/javascript/pokedex/Pokedex';
import FlagGuesser from './components/javascript/metronome/flag-guesser/FlagGuesser';
import ProjectsJS from './components/javascript/ProjectsJS';
import ProjectsPy from './components/python/ProjectsPy';
import NavBar from './components/NavBar';

function App() {
  return (
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/javascript" element={<ProjectsJS />}/>
          <Route path="/javascript/background-generator" element={<BackgroundGenerator />}/>
          <Route path="/javascript/metronome" element={<Metronome />}/>
          <Route path="/javascript/pokedex" element={<Pokedex />}/>
          <Route path="/javascript/flag-guesser" element={<FlagGuesser />}/>
          <Route path="/python" element={<ProjectsPy />}/>
        </Routes>
      </Router>
  );
}

export default App;
