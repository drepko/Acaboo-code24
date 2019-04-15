import React from 'react'
import {mission_man_sitting}  from  '../../images/imagelinks'
import { Link } from "react-router-dom";
import LifeAtAcaboo from './LifeAt'
import AboutUsButton from '../about/AboutUsButton'
class JobDetailPage extends React.Component {
  
    render() {
      return (
        <div className = "job-page">
           <h2>Digital Marketing internship</h2>
           <h4>Intro</h4>
           <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa. Four years ago I started my bachelors in business. Just like all of my fellow students I bought all the required books for the first courses and to be honest, those were the last books bought during the entire study. </p>
           <div className = 'intro-image'>
              <img alt="mission_man_image " className="search_image_1" src={mission_man_sitting} />
           </div>

           <div className ="about-job">
              <h2>About this Role</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa. Four years ago I started my bachelors in business. Just like all of my fellow students I bought all the required books for the first courses and to be honest, those were the last books bought during the entire study.</p>
           </div>

           <div className ="faq-job">
              <h2>FAQ</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa. Four years ago I started my bachelors in business. Just like all of my fellow students I bought all the required books for the first courses and to be honest, those were the last books bought during the entire study.</p>       
           </div>

           <div className ="benefit-job">
              <h2>Benefits</h2>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa. Four years ago I started my bachelors in business. Just like all of my fellow students I bought all the required books for the first courses and to be honest, those were the last books bought during the entire study.</p>
           </div>

           <div className ="apply-job">
              <h2>How to Apply</h2>
              <p>Sound like a good fit for you? Please email us at [jobs@acaboo.com](mailto:jobs@acaboo.com) and:</p>
              <p>- Include the role's title in your subject line (it'll help us to sort through the emails). </p>
              <p>- Send along links that best showcase the relevant things you've built and done, e.g. your portfolio, LinkedIn, Github, writing samples, whatever describes you best.</p>
              <p>- Keep it short and sweet </p>
               <Link to="/careers"><p>← See All Open Positions</p></Link>
           </div>

           <LifeAtAcaboo/>

           <div className = "about-us-job" >
              <AboutUsButton/>
           </div>
        </div>
      )
    }
  }
  
  
  
  export default JobDetailPage