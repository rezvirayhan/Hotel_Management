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
import Foods from "./Home/Food/Foods/Foods";
import Review from "./Home/Review/Review";
import AllReviwe from "./Home/Review/AllReview/AllReviwe";
import FoodBooking from "./Home/Booking/FoodBooking/FoodBooking";
import Order from "./Home/Booking/Order/Order";

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
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/ourFood" element={<Foods></Foods>}></Route>
        <Route path="/customerReview" element={<AllReviwe></AllReviwe>}></Route>

        <Route
          path="/booking/:BookingId"
          element={
            <RequireAuth>
              <FoodBooking></FoodBooking>
            </RequireAuth>
          }
        ></Route>


        <Route
          path="/chackout"
          element={
            <RequireAuth>
              <TMChackout></TMChackout>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/myOrder"
          element={
            <RequireAuth>
              <Order></Order>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/customerreview"
          element={
            <RequireAuth>
              <Review></Review>
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
