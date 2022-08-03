import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Home/Home/Home';
import About from './Home/About/About';
import TMentor from "./Home/TMentor/TMentor";

function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/about" element={<About></About>} />
      <Route path="/tmmentors" element={<TMentor></TMentor>}></Route>
      </Routes>

    </div>
  );
}

export default App;


