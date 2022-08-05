import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home/Home";
import Footer from "./Home/Footer/Footer";
import Header from "./Home/Header/Header";
import TMentorDetails from "./Home/Details/TMentorDetails/TMentorDetails";
import NotFound from "./Home/NotFound/NotFound";
import Login from "./Home/Authentication/Login/Login";
import Register from "./Home/Authentication/Register/Register";
import TMChackout from "./Home/Chackout/TMChackout/TMChackout";
import RequireAuth from "./Home/Authentication/RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>

        <Route
          path="tmentor/:tmentordetails"
          element={<TMentorDetails></TMentorDetails>}
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route
          path="/chackout"
          element={
            <RequireAuth>
              <TMChackout></TMChackout>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
