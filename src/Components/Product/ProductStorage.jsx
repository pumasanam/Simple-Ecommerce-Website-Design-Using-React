import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';

const ProductStorage = ({list}) => {
  return (
    <>
      <div className="product_storage">
            <img src={list.img} alt="" />
            <div className="product_Storage_list">
              <h4>{list.title}</h4>
              <h5>$ {list.price} /-</h5>

              <div className="span">
                <span><StarIcon style={{color:"gold", letterSpacing:"5px"}}/></span>
                <span><StarIcon style={{color:"gold", letterSpacing:"5px"}}/></span>
                <span><StarIcon style={{color:"gold", letterSpacing:"5px"}}/></span>
                <span><StarIcon style={{color:"gold", letterSpacing:"5px"}}/></span>
                <span><StarHalfIcon style={{color:"gold", letterSpacing:"5px"}}/></span>
              </div>

              
            </div>
      </div>
    </>
  );
};

export default ProductStorage;
