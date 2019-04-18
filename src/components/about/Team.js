import React, { Component } from 'react'
import { Link } from "react-router-dom";
import LinkedIn from '../../images/social-media-logos/LinkedIn_black.png'


export default class Team extends Component {
  render() {
    return (
      <div className ="team-main">
        <p className ='text-med-black font-weight-bold' >Team</p>
        <p className="text-sm-black">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
        
        <div className = "display-flex">
        <div className ="img-with-text padding-top-small">
            <div className ='text-center'>
            <span className=" blue-cirlce"></span></div>
                <p className ='text-center text-sm-black'><b>Mikel Palokaj</b></p>
                <p className ='text-sm-grey text-center'>Founder & CEO</p>
                <p className ='text-sm-black' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <Link onClick={()=> window.open("https://www.linkedin.com", "_blank")}> <img className="image-xsmall" src={LinkedIn} alt ="linkedin"/>  </Link>
            </div>

            <div className ="img-with-text padding-top-small">
            <div className ='text-center'>
            <span className=" blue-cirlce"></span></div>
                <p className ='text-center text-sm-black'><b>Mark Laagland</b></p>
                <p className ='text-sm-grey text-center'>Co-founder & CTO</p>
                <p className ='text-sm-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>             
                <Link onClick={()=> window.open("https://www.linkedin.com", "_blank")}> <img className="image-xsmall" src={LinkedIn} alt ="linkedin"/> </Link>
            </div>

            <div className ="img-with-text padding-top-small">
            <div className ='text-center'>
            <span className=" blue-cirlce"></span></div>
                <p className ='text-center text-sm-black'><b>Kent de Bruin</b></p>
                <p className ='text-sm-grey text-center'>Co-founder & CPO</p>
                <p className ='text-sm-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <Link onClick={()=> window.open("https://www.linkedin.com", "_blank")}> <img className="image-xsmall" src={LinkedIn} alt ="linkedin"/> </Link>
            </div>
        </div>
      </div>
    )
  }
}