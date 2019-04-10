import React from 'react'
import {connect} from 'react-redux'
import FAQPage from './FAQPage'

class FAQPageContainer extends React.Component {
  componentDidMount() {
  // something
  }

  render() {
    return <FAQPage />
  }
}

const mapStateToProps = state => ({
  // something
})

export default connect(mapStateToProps)(FAQPageContainer)