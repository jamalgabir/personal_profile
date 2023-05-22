import React from 'react';
import "./main.css"
import Img from "../imges/profile.JPG"
const main = () => {
  return (
    <div className='main-container'>
       <div className="main-img">
        <img className='profile-img' src={Img} alt="profile" />
       </div>
       <hr/>
       <div className="main-info">
        <h2>Fullstack developer</h2>
        <p className='text'>I am 
A Full Stack Developer with a passion for delivering high-quality web applications, 
I have expertise in JavaScript, React.js, Node.js, and SQL. I have a strong background in front-end development and am highly skilled in creating dynamic user interfaces using React.js. 
My expertise in Node.js allows me to develop efficient and scalable back-end solutions, and my proficiency in SQL enables me to manage and retrieve data from databases effectively.

I am constantly seeking to improve my skills and stay up-to-date with the latest technologies. 
I am a self-starter who is able to take a project from the planning stage to deployment, ensuring a seamless and integrated experience for the user. 
With a keen eye for detail and a focus on clean and efficient code, I am dedicated to delivering high-quality web applications that meet the needs of users and businesses alike.

Whether working on small projects or large-scale applications, I am committed to delivering results that meet the highest standards. 
With my technical skills, creative problem-solving abilities, and passion for web development, I am confident that I would make a valuable addition to any team.
</p>
       </div>
    </div>
  )
}

export default main