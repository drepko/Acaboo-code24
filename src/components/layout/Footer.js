import React from 'react'
import { Link } from "react-router-dom";
import SubscribeFormContainer from '../subscribe/SubscribeFormContainer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Instagram from '../../images/social-media-logos/Instagram.png'
import LinkedIn from '../../images/social-media-logos/LinkedIn.png'
import Twitter from '../../images/social-media-logos/Twitter.png'
import Facebook from '../../images/social-media-logos/Facebook.png'
import location from '../../images/location.svg'
import mail from '../../images/mail.svg'
import phone from '../../images/phone.svg'

import '../../styles/App.css'

export default function Footer(props) {
    return (
        <Container className="footer padding">
            <Row>
                <Col  xs={{ span: 2, offset: 2 }}>
                    <h3 className="text-med-white">Navigate</h3>
                    <Link className="padding-top-xsmall text-xs-grey" to="/about">About</Link>
                    <Link className="padding-top-xsmall text-xs-grey" to="/blog">Blog</Link> 
                    <Link className="padding-top-xsmall text-xs-grey" to="/team">Team</Link>
                    <Link className="padding-top-xsmall text-xs-grey" to="/courses">Courses</Link>
                    <Link className="padding-top-xsmall text-xs-grey" to="/careers">We’re Hiring</Link>
                </Col>

                <Col xs={{span: 2, offset: 0}} className ='contact-padding'>
                    <h3 className="text-med-white">Contact</h3> 
                    <p className="padding-top-xsmall text-xs-grey">
                        <img alt="mail_image" src={location} className = "footer-images" /> &nbsp;&nbsp;&nbsp;Boelelaan 1081 <br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; WN-P246<br/> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 1081 HV Amsterdam
                    </p>
                        
                    <p className="padding-top-xsmall text-xs-grey">
                        <img alt="mail_image" src={phone} className = "footer-images" /> &nbsp;&nbsp;&nbsp;+ 31 615536113<br/>
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mon - Fri 9:00 - 17:00</span><br/>
                    </p>

                    <p className="padding-top-xsmall text-xs-grey">
                        <img alt="mail_image" src={mail} className = "footer-images" />&nbsp;&nbsp;&nbsp;&nbsp;info@acaboo.com<br/>
                    </p>
                </Col>

                <Col xs={{ offset: 1 }}>
                    <h3 className="text-med-white">Subscribe</h3>
                    <SubscribeFormContainer />

                </Col>
            </Row>
            <div className="social-media">
               <Link to onClick={()=> window.open("https://www.instagram.com/acaboonl/", "_blank")}> <Image src={Instagram}/></Link>
               <Link to onClick={()=> window.open("https://www.linkedin.com/company/18289841/", "_blank")}> <Image src={LinkedIn}/></Link>
               <Link to onClick={()=> window.open("https://twitter.com/acaboonl", "_blank")}><Image src={Twitter}/></Link>
               <Link to onClick={()=> window.open("https://www.facebook.com/acaboo/", "_blank")}><Image src={Facebook}/></Link>
            </div>
            <Row className="Acaboo-2019">
            &#169; Acaboo 2019. This page is subject to the Privacy Policy and Terms of Service.
            </Row>
        </Container>
    )
}



