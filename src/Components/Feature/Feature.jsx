import React from 'react';
import "./Feature.css";
import fea1 from "./../img/features/f1.png";
import fea2 from "./../img/features/f2.png";
import fea3 from "./../img/features/f3.png";
import fea4 from "./../img/features/f4.png";
import fea5 from "./../img/features/f5.png";
import fea6 from "./../img/features/f6.png";

const Feature = () => {
  return (
    <>
      <div className="feature">
        <div className="feature_list">
            <div className="inner_Feature">
                <img src={fea1} alt="" />
                <h5 className='feature_h5'>Fast Connection</h5>
            </div>

            <div className="inner_Feature">
                <img src={fea2} alt="" />
                <h5 className='feature_h5'>Time Saving</h5>
            </div>

            <div className="inner_Feature">
                <img src={fea3} alt="" />
                <h5 className='feature_h5'>Save Money</h5>
            </div>

            <div className="inner_Feature">
                <img src={fea4} alt="" />
                <h5 className='feature_h5'>Cutomer </h5>
            </div>

            <div className="inner_Feature">
                <img src={fea5} alt="" />
                <h5 className='feature_h5'> Relationship</h5>
            </div>

            <div className="inner_Feature">
                <img src={fea6} alt="" />
                <h5 className='feature_h5'>Advisor</h5>
            </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
