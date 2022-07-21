import React from 'react';
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import Feature from './Feature/Feature';
import ProductList from './Product/ProductList';
import People from './People/People';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Feature/>
      <ProductList/>
      <People/>
      <Footer/>
    </>
  );
};

export default Home;
