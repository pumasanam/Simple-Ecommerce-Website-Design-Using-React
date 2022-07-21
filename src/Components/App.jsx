import React from 'react';
import "./App.css";
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import ProductPage from './ProductPage';
import About from './About';

const App = () => {
  return (
    <>
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/productpage" element={<ProductPage/>} />
            <Route path="/about" element={<About/>} />
      </Routes>
    </>
  );
};

export default App;
