import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Home/Home/Home';
import Footer from "./Home/Footer/Footer";
import Header from "./Home/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home></Home>} />
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;


