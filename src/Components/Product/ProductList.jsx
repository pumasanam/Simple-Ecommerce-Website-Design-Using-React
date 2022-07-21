import React from 'react';
import "./Product.css";
import ProductData from './ProductData';
import ProductStorage from './ProductStorage';

const ProductList = () => {
  return (
    <>
      <div className="product">
        <h2>Our Available Products</h2>

        <div className="product_list">
            {ProductData.map((list,index)=>{
                    return <ProductStorage key={index} list={list}/>
            })}
        </div>
      </div>
    </>
  )
}

export default ProductList
