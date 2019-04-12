import React, { Component } from 'react'
import desklamp from '../../images/mock-ups/deskLamp.png'
import womanDesk from '../../images/mock-ups/woman_desk.png'
import manHandshake  from '../../images/mock-ups/man_handshake.png'


export default class AboutPage extends Component {
  render() {
    return (
      <div className ="about-us-main">
        <h3>About Acaboo</h3>
        <h1>Together we reimagine education </h1>

        <div className="desk-lamp-about-us">
            <img className="search_image_1" src={desklamp} alt="desk-lamp-about-us"/>
        </div>

        <div className = "desk-lamp-paragraph-1">
             <p>
               Four years ago I started my bachelors in business. Just like all of my fellow students I bought all the required books for the first courses and to be honest, those were the last books bought during the entire study. Why? Well, study books are extremely expensive and students are a poor breed.
             </p>
        </div>

        <div className = "desk-lamp-paragraph-2">
             <p>
               Four years ago I started my bachelors in business. Just like all of my fellow students I bought all the required books for the first courses and to be honest, those were the last books bought during the entire study. Why? Well, study books are extremely expensive and students are a poor breed.
             </p>
        </div>

        <div className="women-desk-about-us">
            <img className="search_image_1" src={womanDesk} alt="women-desk-about-us" />
        </div>

        <h1>Study more efficient with Acaboo.</h1>
        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.</p>
        
        <div className="man-handshake-about-us">
            <img className="search_image_1" src={manHandshake} alt="man-handshake-about-us"/>
        </div>
      </div>
    )
  }
}