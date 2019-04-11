import React from 'react'
import { Link } from "react-router-dom";

export default class Mission extends React.Component {

    render(){
        return(
            <div className = 'open-position-main'>
                <h2>Open Positions</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa</p>
                <div className = "add jobs">
                    JOB LIST LINKS
                </div>
                <p>Didn’t find your positions but still think you are a fit? 
                    {/* check the endpoint for email  */}
                    <Link to="/email"> <b> Drop us an email!</b></Link>
                       
                </p>
            </div>

        )
    }
}
