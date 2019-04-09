import React from 'react'
import { Link } from "react-router-dom";
import './ProgressBar.css'

export default function ProgressBar(props) {
    console.log("PROGRESSS",props.progress)

    return (
  <div className="progress-bar">

   <div className="filler" style={{ width: `${props.progress}%` }}/> 
  </div>
  )
    
}
