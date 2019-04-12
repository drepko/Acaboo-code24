import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class BrowseCourse extends Component {
  render() {
    return (
      <div className ="join-us-main">
         <div className="section_6 section_start_studying" >
          <div className="section_6_1">
            <div>
              <h1>Start studying with Acaboo</h1>
            </div>
            <div>
              <Link to="/highlights"><button className="btn_blue">Browse courses</button></Link>
            </div>
          </div>
          <div className="login-link">
            <p>Already using Acaboo?<Link to='/logins'>Log In</Link> </p>
          </div>
          
        </div>

      </div>
    )
  }
}