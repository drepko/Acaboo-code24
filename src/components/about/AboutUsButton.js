import React from 'react'
import { Link } from "react-router-dom";

 export default class AboutUsButton extends React.Component {
render(){
    return(
        <div>
            <p className="text-lg-black">Reimagine education with us</p>
            <Link to="/about"><button className="btn-blue-xl">Learn more about Acaboo</button></Link> 
        </div>
    )
}



}


