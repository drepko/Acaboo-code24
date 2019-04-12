import React, {Component} from 'react'
import './ProgressBar.css'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'

class ProgressBar extends Component {
  

  render() {
    const { location } = this.props
    return (
  <div className="progress-bar">

  <ul>
  <li className = {location.pathname.indexOf('signup') > 0 ? "active" : ""}>1</li>
  <li>2</li>
  <li >3</li>
  <li>4</li>
  <li>5</li>
</ul>  
</div>
  )
    
}
}

const mapStateToProps = state => ({
  
})

export default withRouter(
  connect(mapStateToProps)(ProgressBar)
)