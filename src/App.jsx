import React from 'react';
import ReactDOM from "react-dom/client";
import User from './Component/user';
import HeroSection from './Component/Hero';
import Header from './Component/Header';
import { Outlet } from 'react-router';
import Footer from './Component/Footer/Footer';


const App = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default App;
