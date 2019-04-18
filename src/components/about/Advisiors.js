import React, { Component } from 'react'

export default class Team extends Component {
  render() {
    return (
      <div className ="team-main">
        <p className ='text-med-black font-weight-bold'>Advisors</p>
        <p className = 'text-sm-black' >We are fortunate to work with some of the best advisors</p>        
        <div className = "advisors-peoples">
         <div className = "display-flex">
         <div className ="img-with-text padding-top-small">
            <div className ='text-center'>
            <span className=" blue-cirlce"></span></div>
                    <p className ='text-sm-black text-center'><b>Roderik Verstegen</b></p>
                    <p className ='text-sm-black'>Lorem ipsum dolor sit amet, consectetur</p>
                </div>

                <div className ="img-with-text padding-top-small">
                <div className ='text-center'>
                <span className=" blue-cirlce"></span></div>
                    <p className ='text-sm-black text-center'><b>Paul Musters</b></p>
                    <p className ='text-sm-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                </div>
                <div className ="img-with-text padding-top-small">
                <div className ='text-center'>
                <span className=" blue-cirlce"></span></div>
                    <p className ='text-sm-black text-center'><b>Jan de Roos</b></p>
                    <p className ='text-sm-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                </div>
                <div className ="img-with-text padding-top-small">
                <div className ='text-center'>
                <span className=" blue-cirlce"></span></div>
                    <p className ='text-sm-black text-center' ><b>Paul Musters</b></p>
                    <p className ='text-sm-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                </div>
        </div>

        <div className = "display-flex">
         <div className ="img-with-text padding-top-small">
            <div className ='text-center'>
            <span className=" blue-cirlce"></span></div>
                    <p className ='text-sm-black text-center'><b>D-Lab</b></p>
                    <p className ='text-sm-black'>Lorem ipsum dolor sit amet, consectetur</p>
                </div>

                <div className ="img-with-text padding-top-small">
                <div className ='text-center'>
                <span className=" blue-cirlce"></span></div>
                    <p className ='text-sm-black text-center'><b>New Clicks</b></p>
                    <p className ='text-sm-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                </div>
                <div className ="img-with-text padding-top-small">
                </div>
                <div className ="img-with-text padding-top-small">
               </div>
        </div>



            
        </div>
      </div>
    )
  }
}