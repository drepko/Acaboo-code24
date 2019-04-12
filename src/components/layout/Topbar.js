import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Acaboo_logo from '../../images/Acaboo_logo.svg';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import '../../styles/Topbar.css'

class TopBar extends Component {
    render () {
        return (
            <Navbar bg="light" expand="lg" sticky="top">
                <Navbar.Brand href="/">
                    <img alt="" src={Acaboo_logo} className="d-inline-block align-top"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/highlights">Courses</Nav.Link>
                        <Nav.Link href="/faq">Faq</Nav.Link>
                        <Nav.Link href="/logins">Login</Nav.Link>
                        <Nav.Link href="/signup">Sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
    
})

export default withRouter(
    connect(mapStateToProps)(TopBar)
  )