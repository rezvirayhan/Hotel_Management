import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Home/Home/Home';
import Footer from "./Home/Footer/Footer";
import Header from "./Home/Header/Header";
import TMentorDetails from "./Home/Details/TMentorDetails/TMentorDetails";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      
      <Route path='tmentor/:tmentordetails' element={<TMentorDetails></TMentorDetails>}></Route>
      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;


