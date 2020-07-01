import React from 'react';
import { Route, Switch } from "react-router-dom";
// ********************************
import AboutPage from "./Pages/AboutPage"
import HomePage from "./Pages/HomePage"
import ContactPage from "./Pages/ContactPage"
import CartPage from "./Pages/CartPage"
import ProductsPage from "./Pages/ProductsPage"
import SingleProductPage from "./Pages/SingleProductPage"
import DefaultPage from "./Pages/DefaultPage"
// *********************************
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"
import SideCart from "./Components/SideCart"
import Footer from "./Components/Footer"
// **********************************************
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <SideCart />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/cart" component={CartPage} />
        <Route exact path="/products" component={ProductsPage} />
        <Route path="/products/:id" component={SingleProductPage} />
        <Route component={DefaultPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
