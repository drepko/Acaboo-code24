import React, { Component } from 'react'
import { Link } from "react-router-dom";
import '../../styles/Team.css'


export default class Team extends Component {
  render() {
    return (
      <div className ="team-main">
        <h3>Team</h3>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
        
        <div className = "team-peoples">
            <div className ="person-1">
                <img className="team-1" src="" alt ="image1" />
                <p><b>Mikel Palokaj</b></p>
                <p>Founder & CEO</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <Link to onClick={()=> window.open("https://www.linkedin.com", "_blank")}> <img className="search_image_1" src="" alt ="linkedin"/> </Link>
            </div>

            <div className ="person-2">
                <img className="team-2" src="" alt ="image2" />
                <p><b>Mark Laagland</b></p>
                <p>Co-founder & CTO</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>             
                <Link to onClick={()=> window.open("https://www.linkedin.com", "_blank")}> <img className="search_image_1" src="" alt ="linkedin"/> </Link>
            </div>

            <div className ="person-3">
                <img className="team-3" src="" alt ="image3" />
                <p><b>Kent de Bruin</b></p>
                <p>Co-founder & CPO</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                <Link to onClick={()=> window.open("https://www.linkedin.com", "_blank")}> <img className="search_image_1" src="" alt ="linkedin"/> </Link>
            </div>
        </div>
      </div>
    )
  }
}