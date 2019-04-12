import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ProgressBar from '../layout/ProgressBar'
// import ReviewPurchase from './ReviewPurchase'

class ReviewPurchaseContainer extends PureComponent {
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
                <p>List of selected course, with images to be shown here</p>
				<button>Remove selected course(s) (no logic yet)</button>
				<button>Add another course (redirect to /courses)</button>
                <h2>Payment</h2>
                <p>Adyen (looking for a way to integrate)</p>
            </div>
        )
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser
	}
}

export default connect(mapStateToProps)(ReviewPurchaseContainer)
