import React from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
