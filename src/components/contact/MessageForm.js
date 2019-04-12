import React, { PureComponent } from 'react'


export default class MessageForm extends PureComponent {

    handleSubmit = (e) => {
        e.preventDefault()
        const { sender_name, sender_email, sender_phone_number,message} = this.state.formValues
            const data = {sender_name, sender_email, sender_phone_number,message}
            data.message_type = "contact"
		this.props.onSubmit(data)
	}
    state = { 
		formValues: {}, 
     }
     
    handleChange = (event) => {
		const { name, value } = event.target

		this.setState({
			formValues: {...this.state.formValues, [name]: value}
		})
	}

	render() {
		const { handleSubmit } = this.props

		return (
			<div className="signup-form">
				<form onSubmit={this.handleSubmit}>


					<input placeholder="sender_account" type="text" name="sender_account" value={
						this.state.formValues.sender_account || ''
					} onChange={this.handleChange} />

					<input placeholder="sender_name" type="text" name="sender_name" value={
						this.state.formValues.sender_name || ''
					} onChange={this.handleChange} />

					<input placeholder="sender_email" type="email" name="sender_email" value={
						this.state.formValues.sender_email || ''
					} onChange={this.handleChange} />

                    <input placeholder="sender_phone_number" type="text" name="sender_phone_number" value={
						this.state.formValues.sender_phone_number || ''
					} onChange={this.handleChange} />

                   <input placeholder="message" type="text" name="message" value={
						this.state.formValues.message || ''
					} onChange={this.handleChange} />

					
					<button type="submit">Send</button>
				</form>
			</div>
		)
	}
}