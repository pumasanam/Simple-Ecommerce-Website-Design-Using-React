import React from 'react';
import "./Footer.css";
import {Link} from 'react-router-dom';
import footerImg from "./../img/pay/app.jpg";
import footerImg1 from "./../img/pay/pay.png";
import footerImg2 from "./../img/pay/play.jpg";
const Footer = () => {

  return (
    <>
      <footer>
        <div className="footer">
            <h3 >About Us</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex adipisci molestiae blanditiis consequuntur, omnis iste magnam totam iusto magni sed at quia possimus, repellat veritatis excepturi nihil provident? Ipsa magnam incidunt architecto delectus molestiae qui quam laborum, labore, velit error recusandae voluptatibus nihil pariatur fuga? Fugit sint impedit ex laboriosam!</p>
        </div>

        <div className="footer">
            <h3>Links</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/blog">Blog</Link></li>
            </ul>
        </div>

        <div className="footer">
          <h3>Newsletter</h3>
          <h4>In Associate With</h4>

          <div className="footer_img">
            <img src={footerImg} alt="" />
            <br />
            <img src={footerImg1} alt="" />
            <br />
            <img src={footerImg2} alt="" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
