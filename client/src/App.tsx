import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import ShopCartPage from "./pages/ShopCartPage";
import UserLoginPage from "./pages/User/UserLLogin";
import DashBoardPage from "./pages/User/DashBoard";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/productdetail" element={<ProductDetail/>}/>
      <Route path="/categorypage" element={<CategoryPage/>}/>
      <Route path="/shopcartpage" element={<ShopCartPage/>}/>
      <Route path="/userloginpage" element={<UserLoginPage/>}/>
      <Route path="/dashboardpage" element={<DashBoardPage/>}/>
    </Routes>
  );
}

export default App;
