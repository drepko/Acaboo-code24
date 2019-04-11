import React from 'react'
import {connect} from 'react-redux'
import MessageForm from './MessageForm'
import {sendMessage} from '../../actions/sendMessage'

class MessageContainer extends React.Component {

    state = { 
		formValues: {}, 
	 }

	handleSubmit = async (event) => {
		event.preventDefault()
		const {message_type, sender_account	, sender_name, sender_email, sender_phone_number,message} = this.state.formValues
		const data = {message_type, sender_account	, sender_name, sender_email, sender_phone_number,message}
		this.props.sendMessage(data)
	}

	handleChange = (event) => {
		const { name, value } = event.target

		this.setState({
			formValues: {...this.state.formValues, [name]: value}
		})
	}

	

	

	render() {

		return (
			<div>
				<h3>Leave Message</h3>
				<MessageForm handleChange={this.handleChange}  state={this.state} handleSubmit={this.handleSubmit} />
			</div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		sendMessage: state.sendMessage
	}
}

        
        export default connect(mapStateToProps , {sendMessage})(MessageContainer)

