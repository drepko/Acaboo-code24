import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import '../../styles/Topbar.css'
import Acaboo_logo from '../../images/Acaboo_logo.svg';

import {  Nav, NavItem } from 'react-bootstrap'

import Navbar from 'react-bootstrap/Navbar'

class TopBar extends Component {
    render () {
        return (
            <Navbar default collapseOnSelect>
                
                    <Navbar.Brand href="#home">
                    <img alt="" src={Acaboo_logo} className="d-inline-block align-top"/>
                    </Navbar.Brand>
                
            </Navbar>
        )
    }
}


// const TopBar = (props) => {

//     const {history} = props
//     console.log('props', props)

//     return (
//         <div className="topnav">
//             <div className="topnav-logo">
//                 <img onClick={() => history.push('/')} src={Acaboo_logo} className="App-logo" alt="logo" />
//             </div>
//             <div className="topnav-menu">
//                 <a className="tm-i tm-courses" onClick={() => history.push('/highlights')}>Courses</a>
//                 <a className="tm-i tm-faq" onClick={() => history.push('/faq')}>FAQ</a>
//                 <a className="tm-i tm-logins" onClick={() => history.push('/logins')}>Login</a>
//                 <a className="tm-i tm-signup" onClick={() => history.push('/signup')}>Sign up</a>
//                 {/* <a onClick={() => history.push('/logout')}>Logout</a> */}
//             </div>
//         </div>
//     )
// }

const mapStateToProps = state => ({
    
})

export default withRouter(
    connect(mapStateToProps)(TopBar)
  )