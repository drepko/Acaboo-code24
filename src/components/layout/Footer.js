import React from 'react'
import { Link } from "react-router-dom";

export default function Footer(props) {

    return (

        <div>
            <footer style={{ backgroundColor: '#2F2E41'}}>
                    <div style = {{display: 'flex'}}>

                        <div>
                            <ul style={{ listStyle: 'none' }}>
                                <li><h1>Navigate</h1></li>
                                <li><Link style={{ textDecoration: 'none', color: '#FFFFFF' }} to="/about"><p>About</p></Link></li>
                                <li><Link style={{ textDecoration: 'none', color: '#FFFFFF' }}><p>Blog</p></Link ></li>
                                <li><Link style={{ textDecoration: 'none', color: '#FFFFFF' }}><p>Team</p></Link ></li>
                                <li><Link style={{ textDecoration: 'none', color: '#FFFFFF' }} to="/courses"><p>Courses</p></Link ></li>
                                <li><Link style={{ textDecoration: 'none', color: '#FFFFFF' }}><p>We're hiring</p></Link ></li>
                                <li><Link style={{ textDecoration: 'none', color: '#FFFFFF' }}><p>Publishers</p></Link ></li>
                            </ul>
                        </div>

                        <div>
                            <ul style={{ listStyle: 'none' }}>
                                <li><h1>Contact</h1></li>
                                <li><p>Boelelaan 1081 WN-P246 1081 HV Amsterdam</p></li>
                                <li><p>+ 31 615536113 Mon - Fri 9:00 - 17:00</p></li>
                                <li><p>info@acaboo.com</p></li>
                            </ul>
                        </div>

                        <div>
                            <h1>Subscribe</h1>
                            <p>Import Subscribe component here..</p>
                        </div>

                    </div>
            </footer>

        </div>
    )
}


