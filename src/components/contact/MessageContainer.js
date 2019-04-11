import React from 'react'
import {connect} from 'react-redux'
import MessageForm from './MessageForm'
class MessageContainer extends React.Component {

    componentDidMount() {
        // something
        }
      
        render() {
            return (
              <div className = "hiring-page">
              <h3>Leave Message</h3>
              <MessageForm/>
              </div>
            )
          }
        }
        
        const mapStateToProps = state => ({
          // something
        })
        
        export default connect(mapStateToProps)(MessageContainer)

