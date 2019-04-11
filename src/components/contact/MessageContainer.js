import React from 'react'
import {connect} from 'react-redux'
import MessageForm from './MessageForm'
import {sendmessage} from '../../actions/sendMessage'

class MessageContainer extends React.Component {

    state = { 
		formValues: {}, 
	 }

	handleSubmit = async (event) => {
		event.preventDefault()
		const { sender_name, sender_email, sender_phone_number,message} = this.state.formValues
        const data = {sender_name, sender_email, sender_phone_number,message}
        data.message_type = "contact"
        console.log("DATA",data)
		this.props.sendmessage(data)
	}

	handleChange = (event) => {
		const { name, value } = event.target

		this.setState({
			formValues: {...this.state.formValues, [name]: value}
		})
	}

	

	

	render() {
        console.log("signup page props" ,this.props.sendMessage.success)
        console.log(this.props.sendMessage.success)
		return (
			<div>
				<h3>Leave Message</h3>
				<MessageForm handleChange={this.handleChange}  state={this.state} handleSubmit={this.handleSubmit} />
                <p style={{color:'red'}}>{ this.props.sendMessage.error }</p>
            </div>
		)
	}
}

const mapStateToProps = function (state) {
	return {
		sendMessage: state.sendMessage
	}
}

        
        export default connect(mapStateToProps , {sendmessage})(MessageContainer)

