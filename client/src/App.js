import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AdminPage from "./pages/AdminPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";
import ShoppingCard from "./pages/ShoppingCard";
import ProductPage from "./pages/ProductPage";
// import TopBar from "./Components/Navbar/TopBar";
import ProductDetails from "./Components/Reviews/ProductDetails";
import Comments from "./Components/Reviews/Coments";

const App = () => {
  return (
    <BrowserRouter>


      <Comments/>
      <>
        <Routes>
          <Route exact path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/shoppingCard" element={<ShoppingCard />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
