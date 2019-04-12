import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ProgressBar from '../layout/ProgressBar'
import courses from '../../reducers/courses'
import { baseUrl } from '../../constants';

class ReviewPurchaseContainer extends PureComponent {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (e) => {
		e.preventDefault()
		this.props.history.push("highlights");
	}

	render() {
		const {first_name, last_name, email, phone_number} = this.props.currentUser.credentials
		const {selectedCourses} = this.props

		return (
			<div>
                <ProgressBar />

				<h1>Review and Purchase</h1> <br />
				<p>****************</p>
                <h2>Info</h2>

				<p>
                    First name: {first_name} <br />
                    Last name: {last_name} <br />
                    Email: {email} <br />
                    Telephone: {phone_number} <br />
                </p>

				<p>****************</p>
                <h2>Selected course(s)</h2>
                <p>List of selected course</p>

				{
					selectedCourses.map(course => (
							<p>
								Course name: {course.name} <br />
								Price: €{course.price} <br />
								<img alt={course.id} src={`${baseUrl}${course.image}`}/>
							</p>
						)
					)	
				}

				<button onClick={this.handleClick}>Add another course</button>
				<button>Remove selected course(s) (no logic yet)</button> <br />
				
				<p>****************</p>
                <h2>Payment</h2>
                <p>Adyen (looking for a way to integrate)</p>
            </div>
        )
	}
}

const mapStateToProps = state => {
	return {
		currentUser: state.currentUser,
		selectedCourses: state.selectedCourses
	}
}

export default connect(mapStateToProps)(ReviewPurchaseContainer)
