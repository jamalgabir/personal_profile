import React  from 'react';
import nodeimg from "../imges/nodejs.png";
import htmlimg from "../imges/html.png";
import cssimg from "../imges/css.png";
import "./skills.css";
const Skills = () => {
    

  return (
    <div>
        <h3>My skills</h3>
        <div className="skills-container">
            <div className="skill-item">
                <div className="skill-imges">
                  <img src={nodeimg} alt="" className="skill-img" />
                </div>
                <p>Javascript</p>
                
                </div>
            <div className="skill-item">
                <div className="skill-imges">
                  <img src="" alt="" className="skill-img" />
                </div>
                <p>React.js</p>
                
                </div>
            <div className="skill-item">
              <div className="skill-imges">
                  <img src={nodeimg} alt="" className="skill-img" />
                </div>
                <p>NODE.JS</p>
              </div>
            <div className="skill-item">
              <div className="skill-imges">
                  <img src="" alt="" className="skill-img" />
                </div>
                <p>MONGODB</p>
               </div>
            <div className="skill-item">
              <div className="skill-imges">
                  <img src="" alt="" className="skill-img" />
                </div>
                <p>SQL</p>
              </div>
            <div className="skill-item">
              <div className="skill-imges">
                  <img src={htmlimg} alt="" className="skill-img" />
                </div>
                <p>HTML</p>
              </div>
            <div className="skill-item">
              <div className="skill-imges">
                  <img src={cssimg} alt="" className="skill-img" />
                </div>
                <p>CSS</p>
              </div>
        </div>
        
         
    </div>
  )
}

export default Skills