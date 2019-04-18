import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import Acaboo_logo from '../../images/Acaboo_logo.svg';
import { logout } from '../../actions/users'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class TopBar extends Component {
    render () {
      const { currentUser } = this.props
        return (
            
            <Navbar collapseOnSelect expand="md" bg="white" sticky="top" className="margin-auto text-sm-grey">
            <div className="border-bottom width-80 display-flex padding-bottom-small padding-side-small margin-auto text-sm-grey">
                <Navbar.Brand href="/">
                    <img alt="" src={Acaboo_logo} className="d-inline-block align-top"/>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="ml-auto">
                        <Nav.Link href="/courses">Courses</Nav.Link>

                        <Nav.Link href="/faq">FAQ</Nav.Link>

                    {currentUser === null && 
                        <Nav.Link href="/login">Login</Nav.Link>}

                    {currentUser === null && 
                        <Nav.Link href="/signup">Sign up</Nav.Link>}

                    {currentUser !== null && 
                        <Nav.Link href="/" onClick={() => { this.props.logout()}}>Logout</Nav.Link>}

                    {currentUser !== null && currentUser.credentials && 
                        <Nav.Link href="/dashboard">Hi {currentUser.credentials.first_name}</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser,
})

export default withRouter(
    connect(mapStateToProps, { logout })(TopBar)
)