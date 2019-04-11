import React, { PureComponent } from 'react'


export default class MessageForm extends PureComponent {

	render() {

		return (
			<div className="signup-form">
				<form >

					<input placeholder="First Name" type="text" name="first_name"  />

					<input placeholder="Last Name" type="text" name="last_name"  />

					<input placeholder="Telephone" type="text" name="phone_number" />

					<input placeholder="Email" type="email" name="email"  />

					
					<button type="submit">submit</button>
				</form>
			</div>
		)
	}
}