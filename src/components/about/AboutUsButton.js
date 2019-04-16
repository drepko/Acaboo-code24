import React from 'react'
import { Link } from "react-router-dom";

 export default class AboutUsButton extends React.Component {
render(){
    return(
        <div className = 'about-us-button'>
            <h1>Reimagine education with us</h1>
            <Link to="/about"><button>Learn more about Acaboo</button></Link> 
        </div>
    )
}



}


