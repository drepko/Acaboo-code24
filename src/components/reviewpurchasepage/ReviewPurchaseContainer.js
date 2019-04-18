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
				<div className="display-flex-start">
					<div className="main-row ai-start">

						<div>
							<p className="text-med-black">Info</p>
							<p className="text-sm-black">
								First name: <b>{first_name}</b> <br />
								Last name: <b>{last_name}</b> <br />
								Email: <b>{email}</b> <br />
								Telephone: <b>{phone_number}</b> <br />
							</p>
						</div>

						<div className="max-width-med">
							<p className="text-med-black">Course</p>
							<div className="main-row border-thin-grey max-width-med">
								{selectedCourses.map(course => 
								(<div>
									<div className="padding-side-small">
										<img className="image-book" alt={course.id} src={`${baseUrl}${course.image}`}/>
									</div>
									<div className="flex-column  medium-div ai-start padding-tb">
										<p>Course name: <b>{course.name}</b></p>
										<p>Price: <b>€ &nbsp;{course.price.toFixed(2).toString().replace(".", ",")}</b></p>
									</div>
								</div>))}							
							</div>
						</div>

					</div>

					<div className="ai-center padding">
					{selectedCourses.map(course => (
						<button className="btn-white-med text-sm-blue margin-side" onClick={this.onDelete} value={course.id}>Remove</button>))}
					</div>

				</div>
                


				<p>****************</p>
				{
					!total ?

					<p>Your cart is empty</p> :

					<h3>Total price: €{subtotal}</h3>
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
