import React from 'react'
//import { Link } from "react-router-dom";
import SubscribeFormContainer from '../subscribe/SubscribeFormContainer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import Instagram from '../../images/social-media-logos/Instagram.png'
import LinkedIn from '../../images/social-media-logos/LinkedIn.png'
import Twitter from '../../images/social-media-logos/Twitter.png'
import Facebook from '../../images/social-media-logos/Facebook.png'
import '../../styles/App.css'

export default function Footer(props) {
    return (
        <Container className="footer padding">
            <Row>
                <Col>
                    <h3>Navigate</h3>
                    <p><Nav.Link href="/about">About</Nav.Link></p>
                    <p><Nav.Link href="/blog">Blog</Nav.Link></p>
                    <p><Nav.Link href="/team">Team</Nav.Link></p>
                    <p><Nav.Link href="/highlights">Courses</Nav.Link></p>
                    <p><Nav.Link href="/careers">We’re Hiring</Nav.Link></p>
                </Col>
                <Col>
                    <h3>Contact</h3> 
                    <br/>Boelelaan 1081 
                    <br/>WN-P246 
                    <br/>1081 HV Amsterdam
                    <br/>&#9742; + 31 615536113
                    <br/>Mon - Fri 9:00 - 17:00
                    <br/> &#9993; info@acaboo.com
                </Col>
                <Col lg={true} lg={6}><SubscribeFormContainer />
                </Col>
            </Row>
            <Row className="social-media">
                <Image src={Instagram}/>
                <Image src={LinkedIn}/>
                <Image src={Twitter}/>
                <Image src={Facebook}/>
            </Row>
            <Row className="Acaboo-2019">
            &#169; Acaboo 2019. This page is subject to the Privacy Policy and Terms of Service.
            </Row>
        </Container>
    )
}


