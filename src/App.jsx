import { useState } from "react";
import "./index.css";
import AssemblePC from "./Components/AssemblePC";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Components/Products";
import IndividualProduct from "./Components/IndividualProduct";
import FetchProduct from "./Components/FetchProduct";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Cart from "./Components/Cart";
import CheckoutPage from "./Components/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product" element={<IndividualProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
