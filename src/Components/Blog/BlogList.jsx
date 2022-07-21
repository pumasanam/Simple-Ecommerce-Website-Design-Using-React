import React from 'react';
import BlogData from './BlogData';
import BlogStorage from './BlogStorage';
import "./Blog.css";
const BlogList = () => {
  return (
    <>
      <div className="bloglist">
        {BlogData.map((list,index)=>{
            return <BlogStorage key={index} list={list}/> ;
        })}
      </div>
    </>
  );
};

export default BlogList;
