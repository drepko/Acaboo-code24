import React, { Component } from 'react'
import '../../styles/Advisor.css'

export default class Team extends Component {
  render() {
    return (
      <div className ="team-main">
        <h3>Advisors</h3>
        <p>We are fortunate to work with some of the best advisors</p>        
        <div className = "advisors-peoples">
         <div className = "advisor-line-1">
                <div className ="person-1">
                    <img className="advisor-1" src="" alt ="image1" />
                    <p><b>Roderik Verstegen</b></p>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                </div>

                <div className ="person-2">
                    <img className="advisor-2" src="" alt ="image2" />
                    <p><b>Paul Musters</b></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                </div>
                <div className ="person-3">
                    <img className="advisor-3" src="" alt ="image3" />
                    <p><b>Jan de Roos</b></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                </div>
                <div className ="person-4">
                    <img className="advisor-4" src="" alt ="image4" />
                    <p><b>Paul Musters</b></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                </div>
        </div>

        <div className = "advisor-line-2">
                <div className ="person-5">
                    <img className="advisor-5" src="" alt ="image5" />
                    <p><b>Alexander Klopping</b></p>
                    <p>Lorem ipsum dolor sit amet, conelit, sed do</p>
                </div>

                <div className ="person-6">
                    <img className="advisor-6" src="" alt ="image6" />
                    <p><b>New Clicks</b></p>
                    <p>Lorem ipsum dolor sit Lorem ipsum dolor sit </p>
                </div>
                <div className ="person-7">
                    <img className="advisor-7" src="" alt ="image7" />
                    <p><b>Jan de Roos</b></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                </div>
                <div className ="person-8">
                    <img className="advisor-8" src="" alt ="image8" />
                    <p><b>New Clicks</b></p>
                    <p>Lorem ipsum dolor sit</p>
                </div>
        </div>


            
        </div>
      </div>
    )
  }
}