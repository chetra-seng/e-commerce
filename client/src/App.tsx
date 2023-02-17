import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CategoryPage from "./pages/CategoryPage";
import ShopCartPage from "./pages/ShopCartPage";
import DashBoard from "./pages/seller/DashBoard";
import CategoriesSeller from "./pages/seller/CategoriesSeller";
import ProductsSeller from "./pages/seller/Products";
import ProtectedSeller from "./components/protected/ProtectedSeller";
import ProtectedCustomer from "./components/protected/ProtectedCustomer";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/productdetail" element={<ProductDetailPage />} />
      <Route path="/category" element={<CategoryPage/>} />
      <Route
        path="/shoppingcart"
        element={
          <ProtectedCustomer>
            <ShopCartPage />
          </ProtectedCustomer>
        }
      />
      <Route
        path="/seller/dashboard"
        element={
          <ProtectedSeller>
            <DashBoard />
          </ProtectedSeller>
        }
      />
      <Route
        path="/seller/categories"
        element={
          <ProtectedSeller>
            <CategoriesSeller />
          </ProtectedSeller>
        }
      />
      <Route
        path="/seller/products"
        element={
          <ProtectedSeller>
            <ProductsSeller />
          </ProtectedSeller>
        }
      />
    </Routes>

  );
}

export default App;
