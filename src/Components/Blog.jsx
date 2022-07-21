import React from 'react';
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import BlogList from './Blog/BlogList';
import Footer from './Footer/Footer';

const Blog = () => {
  return (
    <>
      <Navbar/>
      <Hero title="Blog" text="We Have More Than 100 Blogs"/>
      <BlogList/>
      <Footer/>
    </>
  );
};

export default Blog;
