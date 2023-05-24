import React from 'react'
import "./assets/css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Page404 } from "./pages";
import AOS from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return<>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path="*" element={<Page404/>}/>
  </Routes>
  </BrowserRouter>
  </>
}

export default App