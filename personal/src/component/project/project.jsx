import React from 'react'
import "./project.css";
import Data from "./data.js"
import img from "../imges/item1.jpeg";
import GitHubIcon from '@mui/icons-material/GitHub';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const project = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

  return (
    <div className='project-contianer'>
       <h3 className='project-title'>My projects</h3>
       <Slider {...settings}>
        {Data.map((item)=>(
            <div className="project-item">
               <img className='project-img' src={img} alt="item" />
               <div className="pro-info">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                 <button className='btn'>Demo</button>
               <div className="icon">
                <GitHubIcon/>
               </div>
               
               </div>
               
            </div>
        ))}
       </Slider>
    </div>
  )
}

export default project