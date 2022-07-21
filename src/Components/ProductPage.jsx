import React, { useState } from 'react';
import "./ProductPage.css";
import Navbar from './Navbar/Navbar';
import productpageimg1 from "./img/products/f1.jpg";
import productpageimg2 from "./img/products/f2.jpg";
import productpageimg3 from "./img/products/f3.jpg";
import productpageimg4 from "./img/products/f4.jpg";
import Footer from "./Footer/Footer";

const ProductPage = () => {
  const [pimg, setPimg] = useState(productpageimg1);

  const prodcutimg =()=>{
    setPimg(productpageimg1);
  }

  const prodcutimg1 =()=>{
    setPimg(productpageimg2);
  }

  const prodcutimg2 =()=>{
    setPimg(productpageimg3);
  }

  const prodcutimg3 =()=>{
    setPimg(productpageimg4);
  }

  const [number, setNumber] = useState("");
  const [result, setresult] = useState("");

  const check =()=>{
    let total = number * 70;
    setresult(`$ ${total} /- only`);
  }
  return (
    <>
    <Navbar/>
      <div className="productpage">
            <div className="productpage_img">
                <img src={pimg} alt=""  />

                <div className="productpage_imgs">
                  <div className="innerproduct_img" onClick={prodcutimg}><img src={productpageimg1} alt="" /></div>

                  <div className="innerproduct_img" onClick={prodcutimg1}><img src={productpageimg2} alt="" /></div>

                  <div className="innerproduct_img" onClick={prodcutimg2}><img src={productpageimg3} alt="" /></div>

                  <div className="innerproduct_img" onClick={prodcutimg3}><img src={productpageimg4} alt="" /></div>

                </div>
            </div>

            <div className="productpage_list">
              <h1>Rainbow Colorful Shirt</h1>
              <h2>$ 70 /-</h2>
              <h3>Quantity</h3>

              <input type="number" value={number} onChange={(e)=>{
                setNumber(e.target.value);
              }} placeholder='0' className='productnumber'  />
              <br />

              <button onClick={check}>Check</button>

              <br />
              <input type="text" value={result} onChange={(e)=>{
                setresult(e.target.value);
              }}  placeholder='Total' className='totalInput' />
              
              <br />

              <button className='buyNow'>Buy Now</button>

              <h4>Offer ! Offer ! Offer !</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A assumenda animi repellendus voluptates labore pariatur, obcaecati voluptate facilis! Maxime obcaecati officia, dolorum dolorem quod libero recusandae facilis labore, expedita dicta tempora aperiam accusantium voluptates, est repellendus quis molestias amet ratione. Minima, omnis earum ab ipsa commodi libero assumenda suscipit quisquam facere! Laboriosam in suscipit soluta aliquid voluptate veniam officia temporibus eius fuga atque, maxime nihil voluptates ratione ab, repellat molestiae.</p>
            </div>
      </div>

      <Footer/>
    
    </>
  );
};

export default ProductPage;
