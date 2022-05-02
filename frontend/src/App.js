import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Hero from './components/hero';


function App() {
  return (

    <Router>
      <Routes>
        <Route path="/about" element={<Hero />} />
        <Route path="/" element={<Navbar />} />
    </Routes>
    </Router>
  );
}

export default App;
