import React from 'react'
import { Link } from "react-router-dom";
import SubscribeFormContainer from '../subscribe/SubscribeFormContainer'

export default function Footer(props) {

    return (
            <footer className="footer-component">
                    <div style = {{display: 'flex'}}>
                    
                        <div className="footer-navigate">
                            <ul style={{ listStyle: 'none' }}>
                                <li><h1>Navigate</h1></li>
                                <li><Link style={{ textDecoration: 'none', color: '#FFFFFF' }} to="/about"><p>About</p></Link></li>
                                <li><a style={{ textDecoration: 'none', color: '#FFFFFF' }} onClick={()=> window.open("https://www.google.com", "_blank")}>Blog</a></li>
                                <li><Link style={{ textDecoration: 'none', color: '#FFFFFF' }} to="/"><p>Team</p></Link ></li>
                                <li><Link style={{ textDecoration: 'none', color: '#FFFFFF' }} to="/highlights"><p>Courses</p></Link ></li>
                                <li><Link style={{ textDecoration: 'none', color: '#FFFFFF' }} to="/careers"><p>We’re Hiring</p></Link ></li>
                                {/* <li><Link style={{ textDecoration: 'none', color: '#FFFFFF' }} to="/"><p>Publishers</p></Link ></li> */}
                            </ul>
                        </div>

                        <div className="footer-contact">
                            <ul style={{ listStyle: 'none' }}>
                                <li><h1>Contact</h1></li>
                                <li><p>Boelelaan 1081 WN-P246 1081 HV Amsterdam</p></li>
                                <li><p>+ 31 615536113 Mon - Fri 9:00 - 17:00</p></li>
                                <li><p>info@acaboo.com</p></li>
                            </ul>
                        </div>

                        <div className="footer-subscribe">
                            <h1>Subscribe</h1>
                            <SubscribeFormContainer/>
                        </div>

                    </div>
            </footer>
    )
}


