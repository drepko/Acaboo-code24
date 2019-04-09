import React from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import Acaboo_logo from '../../images/Acaboo_logo.svg';


const TopBar = (props) => {

    const {history} = props

    return (
        <div className="topnav">
            <img src={Acaboo_logo} className="App-logo" alt="logo" />
            <button onClick={() => history.push('/')}>Acaboo</button>
            <button onClick={() => history.push('/course')}>Course</button>
            <button onClick={() => history.push('/faq')}>FAQ</button>
            <button onClick={() => history.push('/logins')}>Login</button>
            <button onClick={() => history.push('/signup')}>SignUp</button>
            <button onClick={() => history.push('/logout')}>Logout</button>
        </div>
    )
}

const mapStateToProps = state => ({
    
})

export default withRouter(
    connect(mapStateToProps)(TopBar)
  )