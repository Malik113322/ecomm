import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Header from './component/Header';
import "./styles/app.scss";
import { Toaster } from 'react-hot-toast';
import Cart from './component/Cart';
import Footer from './component/Footer';



const App = () => {
  return (
    <Router>
      <Toaster />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  )
};

export default App;
