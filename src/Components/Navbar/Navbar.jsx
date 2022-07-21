import React, {useState} from 'react';
import "./Navbar.css";
import {Link} from 'react-router-dom';
import Logo from "./../img/logo.png";

const Navbar = () => {
    const [icon, setIcon] = useState(false);

    const icons =()=>{
        setIcon(!icon);
    };

    const [bgcolor, setBgcolor] = useState(false);

    const changebg =()=>{
        if(window.scrollY>=85){
            setBgcolor(true);
        }
        else {
            setBgcolor(false);
        }
    };

    window.addEventListener("scroll", changebg)
  return (
    <>
      <div className={bgcolor ? 'navbar navbar_bg': 'navbar'}>
            <Link to ="/"><img src={Logo} alt="" /></Link>

            <div className="nav_ul">
                <ul className={icon ? "ul active":"ul"}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/productpage">Product</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </div>

            <div className="icons" onClick={icons}>
                {icon ? <i class="fa fa-times" aria-hidden="true"></i> : <i class="fa fa-bars" aria-hidden="true"></i>}
               
                
            </div>
      </div>
    </>
  );
};

export default Navbar;
