import React from 'react';
import "./People.css";
import peopleimg1 from "./../img/people/1.png";
import peopleimg2 from "./../img/people/2.png";
import peopleimg3 from "./../img/people/3.png";

const People = () => {
  return (
    <>
      <div className="people">
        <h1>Our Member</h1>
        <div className="people_list">
            <div className="inner_people_list">
                <img src={peopleimg1} alt="" />
                <h4>Martin C. Davis</h4>
                <h5>Finance Manager</h5>
            </div>

            <div className="inner_people_list">
                <img src={peopleimg2} alt="" />
                <h4>James C. Leonard</h4>
                <h5>Manager</h5>
            </div>

            <div className="inner_people_list">
                <img src={peopleimg3} alt="" />
                <h4>Sabina R. Erickson</h4>
                <h5>Human Resources</h5>
            </div>
        </div>
      </div>
    </>
  );
};

export default People;
