import React from 'react'
import { Link } from "react-router-dom";
export default  class LoginLink extends React.Component {

    render(){
        return(
            <div className="login-link">
            <p>Already using Acaboo?<Link to='/login'>Log In</Link> </p>
          </div>
        )

        
    }
}