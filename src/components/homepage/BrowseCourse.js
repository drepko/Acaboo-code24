import React, { Component } from 'react'
import { Link } from "react-router-dom";
//import '../../styles/App.css';



export default class BrowseCourse extends Component {
  render() {
    return (
      <div className="med-width padding-top" > 
        <div className="ai-start-reverse med-width">
          <div className="flex-row jc-between bg-blue padding-side-small med-width half-height">
              <p className="text-med-white">Start studying with Acaboo</p>
              <Link to="/courses"><button className="btn-white-lg text-sm-white">Browse courses</button></Link>
          </div>

          <div className="text-sm-black font-grey">
            <p>Already using Acaboo? <Link to='/logins'>Log In</Link> </p>
          </div>
        </div>
      </div>
    )
  }
}