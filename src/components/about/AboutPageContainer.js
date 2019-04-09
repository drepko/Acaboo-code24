import React from 'react'
import {connect} from 'react-redux'
import AboutPage from './AboutPage'

class AboutPageContainer extends React.Component {
  componentDidMount() {
  // something
  }

  render() {
    return <AboutPage />
  }
}

const mapStateToProps = state => ({
  // something
})

export default connect(mapStateToProps)(AboutPageContainer)