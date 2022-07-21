import React from 'react';
import { Link } from 'react-router-dom';

const BlogStorage = ({list}) => {
  return (
    <>
      <div className="blogstorage">
        <div className="blog_img">
            <img src={list.img} alt="" />
        </div>

        <div className="blogstorage_list">
            <h3>{list.name}</h3>
            <h4>{list.date}</h4>
            <p>{list.title}</p>
            <Link className='blog_anker' to="/">Continue</Link>
        </div>
      </div>
    </>
  );
};

export default BlogStorage;
