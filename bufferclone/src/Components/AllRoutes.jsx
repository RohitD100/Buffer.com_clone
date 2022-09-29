import { Routes, Route } from "react-router-dom";
import { Home } from "../Pages/Home";
import { Login } from "../Pages/Login";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Pricing } from "../Pages/Pricing";
export const AllRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};
