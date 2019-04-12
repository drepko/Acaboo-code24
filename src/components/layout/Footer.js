import React from 'react'
import { Link } from "react-router-dom";
import SubscribeFormContainer from '../subscribe/SubscribeFormContainer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

export default function Footer(props) {
    return (
        <Container>
            <Row>
                <Col>
                    <Row>Navigate</Row>
                    <Row><Nav.Link href="/about">About</Nav.Link></Row>
                    <Row><Nav.Link href="/blog">Blog</Nav.Link></Row>
                    <Row><Nav.Link href="/team">Team</Nav.Link></Row>
                    <Row><Nav.Link href="/highlights">Courses</Nav.Link></Row>
                    <Row><Nav.Link href="/careers">We’re Hiring</Nav.Link></Row>
                </Col>
                <Col>2 of 3</Col>
                <Col xs={6}>3 of 3</Col>
            </Row>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
            </Row>
            <Row>
                <Col>1 of 2</Col>
            </Row>
        </Container>
    )

//<li><Link style={{ textDecoration: 'none', color: '#FFFFFF' }} to="/about"><p>About</p></Link></li>
//                             <li><Link style={{ textDecoration: 'none', color: '#FFFFFF' }} target="_blank" onClick={()=> window.open("https://www.google.com")}>Blog</Link></li>
//                             <li><Link style={{ textDecoration: 'none', color: '#FFFFFF' }} to="/"><p>Team</p></Link ></li>
//                             <li><Link style={{ textDecoration: 'none', color: '#FFFFFF' }} to="/highlights"><p>Courses</p></Link ></li>
//                             <li><Link style={{ textDecoration: 'none', color: '#FFFFFF' }} to="/careers"><p>We’re Hiring</p></Link ></li>
//                             {/* <li><Link style={{ textDecoration: 'none', color: '#FFFFFF' }} to="/"><p>Publishers</p></Link ></li> */}
//                         </ul>
    //                     </div>

    //                     <div className="footer-contact">
    //                         <ul style={{ listStyle: 'none' }}>
    //                             <li><h1>Contact</h1></li>
    //                             <li><p>Boelelaan 1081 WN-P246 1081 HV Amsterdam</p></li>
    //                             <li><p>+ 31 615536113 Mon - Fri 9:00 - 17:00</p></li>
    //                             <li><p>info@acaboo.com</p></li>
    //                         </ul>
    //                     </div>

    //                     <div className="footer-subscribe">
    //                         <h1>Subscribe</h1>
    //                         <SubscribeFormContainer/>
    //                     </div>

    //                 </div>
    //         </footer>
    // )
}


