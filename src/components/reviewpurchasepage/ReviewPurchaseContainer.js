import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ProgressBar from '../layout/ProgressBar'
import courses from '../../reducers/courses'
import { baseUrl } from '../../constants'
import { deleteCourse } from '../../actions/courses'

class ReviewPurchaseContainer extends PureComponent {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (e) => {
		e.preventDefault()
		this.props.history.push("highlights");
	}

	onDelete = (event) => {
		const course = this.props.selectedCourses.find(course => course.id === Number(event.target.value))
		this.props.deleteCourse(course)
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
								<button onClick={this.onDelete} value={course.id}>Remove this course</button> <br />
							</p>
						)
					)	
				}

				<p>****************</p>
				{
					selectedCourses &&
					<h3>Total price: €{selectedCourses.map(course => course.price).reduce((a, b) => a+b)}</h3>
				}

				<button onClick={this.handleClick}>Add another course</button>
				
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

export default connect(mapStateToProps, { deleteCourse })(ReviewPurchaseContainer)
