import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ProgressBar from '../layout/ProgressBar'

class ReviewPurchaseContainer extends PureComponent {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = () => {
			this.props.history.push("highlights");
	}

	render() {
		const {first_name, last_name, email, phone_number} = this.props.currentUser.credentials

		console.log('props', this.props)

		return (
			<div>
                <ProgressBar />

				<h1>Review and Purchase</h1> <br />

                <h2>Info</h2>
				<p>
                    First name: {first_name} <br />
                    Last name: {last_name} <br />
                    Email: {email} <br />
                    Telephone: {phone_number} <br />
                </p>

                <h2>Selected course(s)</h2>
                <p>List of selected course</p>
				<button onClick={this.handleClick}>Add another course</button>
				<button>Remove selected course(s) (no logic yet)</button>
				
                <h2>Payment</h2>
                <p>Adyen (looking for a way to integrate)</p>
            </div>
        )
	}
}

const mapStateToProps = state => {
	console.log('state', state)
	return {
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps)(ReviewPurchaseContainer)
