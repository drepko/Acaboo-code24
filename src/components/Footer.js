import React from 'react'
import { Link } from "react-router-dom";

export default function Footer(props) {

    return (

        <div>
            <h1>Navigate</h1>
            <Link><p>About</p></Link>
            <Link><p>Blog</p></Link>
            <Link><p>Team</p></Link>
            <Link><p>Courses</p></Link>
            <Link><p>We're hiring</p></Link>
            <Link><p>Publishers</p></Link>

            <h1>Contact</h1>
            <p>Adres here..</p>
            <p>Phone number here..</p>
            <p>Email here..</p>

            <h1>Subscribe</h1>
            <Subscribe/>

        </div>
    )
}


