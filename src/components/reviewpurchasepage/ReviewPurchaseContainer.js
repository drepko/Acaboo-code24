import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ProgressBar from '../layout/ProgressBar'
import { baseUrl } from '../../constants'
import { deleteCourse } from '../../actions/courses'

class ReviewPurchaseContainer extends PureComponent {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick = (e) => {
		e.preventDefault()
		this.props.history.push("courses");
	}

	onDelete = (event) => {
		const course = this.props.selectedCourses.find(course => course.id === Number(event.target.value))
		this.props.deleteCourse(course)
	}	

	render() {
		const {first_name, last_name, email, phone_number} = this.props.currentUser.credentials
		const {selectedCourses} = this.props
		const total = selectedCourses.map(course => course.price).reduce((a,b) => a + b, 0)
		const subtotal = Number.isInteger(total) ? total + `,-` : total.toFixed(2).toString().replace(".", ",")

		return (
			<div>
                <ProgressBar />

				<p className="text-med-black padding-top border-bottom-grey">Review and Purchase</p> <br />
				
				<div>
					<div>
						<p className="text-med-black">Info</p>
						<p className="text-sm-black">
							First name: {first_name} <br />
							Last name: {last_name} <br />
							Email: {email} <br />
							Telephone: {phone_number} <br />
						</p>
					</div>

				</div>
                

				<p>****************</p>
                <h2>Selected course(s)</h2>

				{
					selectedCourses.map(course => (
							<p>
								Course name: {course.name} <br />
								Price: €&nbsp;{course.price.toFixed(2).toString().replace(".", ",")} <br />
								<img alt={course.id} src={`${baseUrl}${course.image}`}/> <br />
								<button onClick={this.onDelete} value={course.id}>Remove this course</button> <br />
							</p>
						)
					)	
				}

				<p>****************</p>
				{
					!total ?

					<p>Your cart is empty</p> :

					<h3>Total price: €&nbsp;{subtotal}</h3>
				}
				<button onClick={this.handleClick}>Add another course</button>
				
				<p></p><br /> {/* adding a blank line, I know this is not smart but who cares? */}
				
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
