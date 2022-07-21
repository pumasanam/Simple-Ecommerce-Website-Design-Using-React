import React from 'react';
import "./About.css";
import Navbar from './Navbar/Navbar';
import Hero from './Hero/Hero';
import Footer from './Footer/Footer';

const About = () => {
  return (
    <>
      <Navbar/>
      <Hero title="About Us" text="Want's To Know About Us"/>
      
      <div className="about_Section">
        <div className="about">
            <div className="about_list">
                <h2>About Us</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque blanditiis consequuntur dolores animi, sapiente cumque ea temporibus, facilis quas nulla possimus. Odit eaque voluptates veniam perferendis, quos deleniti ut tempore neque repellendus maxime officia sint quibusdam eligendi sit consequuntur saepe et amet ea est molestiae nihil repellat dicta. Recusandae id ipsum, odio in saepe enim corrupti suscipit dolores atque soluta est officia asperiores exercitationem earum explicabo voluptas, ea maxime labore quasi corporis minus omnis, consequuntur voluptatum. Iure ad officiis eum beatae ut saepe esse, sequi accusantium cum tenetur ullam quia aperiam reiciendis numquam alias qui quisquam totam repudiandae consectetur. Accusamus?</p>
            </div>
            
            <div className="about_location about_list">
            <iframe title='iframe' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594417.773647192!2d81.88533848239744!3d28.383823961424618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995e8c77d2e68cf%3A0x34a29abcd0cc86de!2sNepal!5e0!3m2!1sen!2snp!4v1658380642888!5m2!1sen!2snp"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>


        <div className="about_contact">
            <form action="">
                <h3>Be Our Member</h3>

                <input type="email" placeholder='Email' />
                <br />
                <input type="password" placeholder='Password' />
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
      </div>

      <Footer/>

    </>
  );
};

export default About;
