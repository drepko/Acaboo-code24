import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class BrowseCourse extends Component {
  render() {
    return (
      <div className="full-width main-column-div padding-top-large" > 
        <div className="ai-start-reverse full-width main-column-div">
          <div className="flex-row jc-between bg-blue padding-side-small full-width half-height main-column-div padding-around-40">
              <p className="text-med-white padding-top-15">Start studying with Acaboo</p>
              <Link to="/courses"><button id="browse-course" className="btn-white-lg text-sm-blue padding-side-small">Browse courses</button></Link>
          </div>

          <div className="text-sm-black font-grey">
            <p>Already using Acaboo? <Link to='/logins'>Log In</Link> </p>
          </div>
        </div>
      </div>
    )
  }
}