import React from 'react'
import {connect} from 'react-redux'
import MessageForm from './MessageForm'
import {sendmessage} from '../../actions/sendMessage'

class MessageContainer extends React.Component {


    
    handleSubmit = (data) => {
		console.log('signup request  to action',data)
		this.props.postMessage(data)
	}


	render() {
        console.log("signup page props" ,this.props.sendMessage)
		return (
			<div>
				<h3>Leave Message</h3>
				<MessageForm  onSubmit={this.handleSubmit} />
                <p style={{color:'red'}}>{ this.props.sendMessage.error }</p>
                <p style={{color:'green'}}>{ this.props.sendMessage.success }</p>

            </div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		sendMessage: state.sendMessage
	}
}

        
        export default connect(mapStateToProps , {postMessage:sendmessage})(MessageContainer)

