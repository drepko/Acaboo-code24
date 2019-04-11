import React from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import '../../styles/Topbar.css'
import Acaboo_logo from '../../images/Acaboo_logo.svg';


const TopBar = (props) => {

    const {history} = props
    console.log('props', props)

    return (
        <div className="topnav">
            <div className="topnav-logo">
                <img onClick={() => history.push('/')} src={Acaboo_logo} className="App-logo" alt="logo" />
            </div>
            <div className="topnav-menu">
                <a className="tm-i tm-courses" onClick={() => history.push('/courses')}>Courses</a>
                <a className="tm-i tm-faq" onClick={() => history.push('/faq')}>FAQ</a>
                <a className="tm-i tm-logins" onClick={() => history.push('/logins')}>Login</a>
                <a className="tm-i tm-signup" onClick={() => history.push('/signup')}>Sign up</a>
                {/* <a onClick={() => history.push('/logout')}>Logout</a> */}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    
})

export default withRouter(
    connect(mapStateToProps)(TopBar)
  )