import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Acaboo_logo from '../../images/Acaboo_logo.svg';
import { logout } from '../../actions/users'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import '../../styles/Topbar.css'

class TopBar extends Component {
    render () {
      const { history, currentUser } = this.props
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
                        {currentUser === null && <span className="tm-i tm-logins" onClick={() => history.push('/login')}>Login</span>}
                    {currentUser === null && <span className="tm-i tm-signup" onClick={() => history.push('/signup')}>Sign up</span>}
                    {currentUser !== null && <span className="tm-i tm-logins" onClick={() => {
                        this.props.logout()
                        history.push('/')
                    }}>
                        Logout</span>}
                    {currentUser !== null && currentUser.credentials && <span className="tm-i tm-signup" onClick={() => history.push('/dashboard')}>Hi {currentUser.credentials.first_name}</span>}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

export default withRouter(
    connect(mapStateToProps, { logout })(TopBar)
)