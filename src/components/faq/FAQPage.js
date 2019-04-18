import React, { Component } from 'react'
import BrowseCourse from '../homepage/BrowseCourse'
import Testimonial from "../homepage/Testimonial"
import StartStudying from '../homepage/StartStudying';
import man_handshake from '../../images/mock-ups/man_handshake.png'

export default class FAQPage extends Component {
  render() {
    return (
      <div className="main-column">
        <p className="padding-top text-lg-black">FREQUENTLY ASKED QUESTIONS</p> <br/>

        <p className="text-sm-black">Can I change my course later on?</p>
        <p className="text-sm-grey">Sed ut perspiciatis unde omnis iste natus error sit 
          <br/>voluptatem accusantium doloremque laudantium,
          <br/> totam rem aperiam, eaque ipsa quae ab illo inventore 
          <br/>veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
          <br/>

        <p className="text-sm-black">Do you offer discount codes?</p>
        <p className="text-sm-grey">Sed ut perspiciatis unde omnis iste natus error sit 
          <br/>voluptatem accusantium doloremque laudantium,
          <br/> totam rem aperiam, eaque ipsa quae ab illo inventore 
          <br/>veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
          <br/>

        <p className="text-sm-black">Are you available in bulk?</p>
        <p className="text-sm-grey">Sed ut perspiciatis unde omnis iste natus error sit 
          <br/>voluptatem accusantium doloremque laudantium,
          <br/> totam rem aperiam, eaque ipsa quae ab illo inventore 
          <br/>veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
          <br/>

        <p className="text-sm-black">Can I change my course later on?</p>
        <p className="text-sm-grey">Sed ut perspiciatis unde omnis iste natus error sit 
          <br/>voluptatem accusantium doloremque laudantium,
          <br/> totam rem aperiam, eaque ipsa quae ab illo inventore 
          <br/>veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
          <br/>

        <p className="text-sm-black">Do you offer discount codes?</p>
        <p className="text-sm-grey">Sed ut perspiciatis unde omnis iste natus error sit 
          <br/>voluptatem accusantium doloremque laudantium,
          <br/> totam rem aperiam, eaque ipsa quae ab illo inventore 
          <br/>veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
          <br/>

        <p className="text-sm-black">Are you available in bulk?</p>
        <p className="text-sm-grey">Sed ut perspiciatis unde omnis iste natus error sit 
          <br/>voluptatem accusantium doloremque laudantium,
          <br/> totam rem aperiam, eaque ipsa quae ab illo inventore 
          <br/>veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p> 
          <br/>

        <p>Still have more questions? Chat with us!</p>

        <div className=""/>

        <BrowseCourse/>

        <div className="padding-top"/>

        <div className="med-width main-column-div">
            <img alt="man_handshake" className="image-med" src={man_handshake} /> 
        </div>

        <Testimonial />

        <div className="padding-top"/>

        <StartStudying/>

      </div>
    )
  }
}