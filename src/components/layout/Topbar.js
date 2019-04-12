import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import '../../styles/Topbar.css'
import Acaboo_logo from '../../images/Acaboo_logo.svg';
import { logout } from '../../actions/users'

import {  Nav, NavItem } from 'react-bootstrap'

import Navbar from 'react-bootstrap/Navbar'

// class TopBar extends Component {
//     render () {
//         return (
//             <Navbar default collapseOnSelect>
                
//                     <Navbar.Brand href="#home">
//                     <img alt="" src={Acaboo_logo} className="d-inline-block align-top"/>
//                     </Navbar.Brand>
                
//             </Navbar>
//         )
//     }
// }


class TopBar extends Component {

    render() {
        const { history, currentUser } = this.props

        return (
            <div className="topnav">
                <div className="topnav-logo">
                    <img onClick={() => history.push('/')} src={Acaboo_logo} className="App-logo" alt="logo" />
                </div>
                <div className="topnav-menu">
                    <span className="tm-i tm-courses" onClick={() => history.push('/highlights')}>Courses</span>
                    <span className="tm-i tm-faq" onClick={() => history.push('/faq')}>FAQ</span>
                    {currentUser === null && <span className="tm-i tm-logins" onClick={() => history.push('/login')}>Login</span>}
                    {currentUser === null && <span className="tm-i tm-signup" onClick={() => history.push('/signup')}>Sign up</span>}
                    {currentUser !== null && <span className="tm-i tm-logins" onClick={() => {
                        this.props.logout()
                        history.push('/')
                    }}>
                        Logout</span>}
                    {currentUser !== null && currentUser.credentials && <span className="tm-i tm-signup" onClick={() => history.push('/dashboard')}>Hi {currentUser.credentials.first_name}</span>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

export default withRouter(
    connect(mapStateToProps, { logout })(TopBar)
)