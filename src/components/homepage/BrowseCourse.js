import React, { Component } from 'react'
import { Link } from "react-router-dom";
//import '../../styles/App.css';



export default class BrowseCourse extends Component {
  render() {
    return (
      <div> 
          <div className="large flex-row jc-between bg-blue">
              <h1>Start studying with Acaboo</h1>
              <Link to="/highlights"><button className="btn-white-lg">Browse courses</button></Link>
          </div>

          <div className="right font-grey">
            <p>Already using Acaboo? <Link to='/logins'>Log In</Link> </p>
          </div>
      </div>
    )
  }
}