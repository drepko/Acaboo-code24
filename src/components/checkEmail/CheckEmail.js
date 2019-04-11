import React, { PureComponent } from 'react'

export default class CheckEmail extends PureComponent {

	render() {
        const {first_name, email} = this.props.credentials
		return (
			<div>
				<h1><b>{first_name}</b>, check your mail.</h1>

				<p>
                    We've send you an email on {email}.<br /><br />
                    Click on the link in the email to activate your account.
                </p>

                <p>Didn't get an email? Click <span className="span-click" onClick={this.props.onClick}><u>here</u></span> to send again.</p>
            </div>
        )
	}
}
