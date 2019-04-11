import React from 'react'
import {connect} from 'react-redux'
import CareersPage from './CareersPage'

class CareersPageContainer extends React.Component {
  componentDidMount() {
  // something
  }

  render() {
    return <CareersPage />
  }
}

const mapStateToProps = state => ({
  // something
})

export default connect(mapStateToProps)(CareersPageContainer)