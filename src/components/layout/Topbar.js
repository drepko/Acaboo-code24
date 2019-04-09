import React from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'


const TopBar = (props) => {

    const {history} = props

    return (
        <div class="topnav">
            <img src=''></img>
            <button onClick={() => history.push('/')}>Acaboo</button>
            <button onClick={() => history.push('/course')}>Course</button>
            <button onClick={() => history.push('/faq')}>FAQ</button>
            <button onClick={() => history.push('/login')}>Login</button>
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