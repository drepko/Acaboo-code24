import React from 'react'
import { Link } from 'react-router-dom'
import woman_desk2 from  '../../images/mock-ups/woman_desk2.png'
import LifeAtAcaboo from './LifeAt'
import AboutUsButton from '../about/AboutUsButton'


class JobDetailPage extends React.Component {
  
    render() {
      return (
        <div className = "job-page">
           <p className="text-lg-black">Digital Marketing internship</p>
           <p className="text-med-black">Intro</p>
           <p className="text-sm-black">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa. Four years ago I started my bachelors in business. Just like all of my fellow students I bought all the required books for the first courses and to be honest, those were the last books bought during the entire study. </p>
           <div className = 'intro-image'>
              <img alt="mission_man_image " className="search_image_1" src={woman_desk2} />
           </div>

           <div className ="about-job">
           <p className="text-med-black">About this Role</p>
              <p className="text-sm-black">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa. Four years ago I started my bachelors in business. Just like all of my fellow students I bought all the required books for the first courses and to be honest, those were the last books bought during the entire study.</p>
           </div>

           <div className ="faq-job">
            <p className="text-med-black">FAQ</p>
            <p className="text-sm-black">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa. Four years ago I started my bachelors in business. Just like all of my fellow students I bought all the required books for the first courses and to be honest, those were the last books bought during the entire study.</p>       
           </div>

           <div className ="benefit-job">
           <p className="text-med-black">Benefits</p>
           <p className="text-sm-black">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa. Four years ago I started my bachelors in business. Just like all of my fellow students I bought all the required books for the first courses and to be honest, those were the last books bought during the entire study.</p>
           </div>

           <div className ="apply-job">
           <p className="text-med-black">How to Apply</p>
           <p className="text-sm-black">Sound like a good fit for you? Please email us at [jobs@acaboo.com](mailto:jobs@acaboo.com) and:</p>
           <p className="text-sm-black">- Include the role's title in your subject line (it'll help us to sort through the emails). </p>
           <p className="text-sm-black">- Send along links that best showcase the relevant things you've built and done, e.g. your portfolio, LinkedIn, Github, writing samples, whatever describes you best.</p>
           <p className="text-sm-black">- Keep it short and sweet </p>
               <Link to="/careers"><p className="text-sm-black">← See All Open Positions</p></Link>
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