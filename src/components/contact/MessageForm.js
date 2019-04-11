import React, { PureComponent } from 'react'


export default class MessageForm extends PureComponent {

	render() {
		const { handleSubmit, handleChange, state } = this.props

		return (
			<div className="signup-form">
				<form onSubmit={handleSubmit}>


					<input placeholder="sender_account" type="text" name="sender_account" value={
						state.formValues.sender_account || ''
					} onChange={handleChange} />

					<input placeholder="sender_name" type="text" name="sender_name" value={
						state.formValues.sender_name || ''
					} onChange={handleChange} />

					<input placeholder="sender_email" type="email" name="sender_email" value={
						state.formValues.sender_email || ''
					} onChange={handleChange} />

                    <input placeholder="sender_phone_number" type="text" name="sender_phone_number" value={
						state.formValues.sender_phone_number || ''
					} onChange={handleChange} />

                   <input placeholder="message" type="text" name="message" value={
						state.formValues.message || ''
					} onChange={handleChange} />

					
					<button type="submit">Send</button>
				</form>
			</div>
		)
	}
}