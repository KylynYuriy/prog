import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Post from './pages/Post';
import About from './pages/About';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Nav from './pages/Nav';



function App() {
  return (  
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>} />  
      <Route path="/post" element={<Post/>} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </>
  );
}

export default App;
  

