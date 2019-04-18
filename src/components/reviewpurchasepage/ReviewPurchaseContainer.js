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
				<div className="display-flex-start border-bottom-grey">
					<div className="main-row ai-start">


						<div className="padding-right">
							<p className="text-med-black">Info</p>
							<p className="text-sm-black">
								First name: <b>{first_name}</b> <br />
								Last name: <b>{last_name}</b> <br />
								Email: <b>{email}</b> <br />
								Telephone: <b>{phone_number}</b> <br />

							</p>
						</div>

						<div className="">
							<p className="text-med-black">Course</p>
								<div className="display-flex flex-column">
									{selectedCourses.map(course => 
										(<div className="main-row margin-bottom padding-bottom-small">
											<div className="display-flex-start main-row half-width border-thin-grey">
												<div className="padding-small width-50">
													<img className="image-book-small" alt={course.id} src={`${baseUrl}${course.image}`}/>
												</div>
												<div className="width-max flex-column ai-start width-50">
													<p className="text-sm-black"><b>{course.name}</b></p>
													<p className="text-sm-black"><b>&#8364;&nbsp;{course.price.toFixed(2).toString().replace(".", ",")}</b></p>
												</div>
											</div>
											<div className="width-max ai-center padding-side-small">
												<button className="btn-white-med text-sm-blue margin-side" onClick={this.onDelete} value={course.id}>Remove</button>
											</div>
										</div>
									))}
								</div>
						</div>


						
					</div>
				</div>
                <div>
					<p className="text-med-black">Payment Method</p>
					<p>Adyen (looking for a way to integrate)</p>
				</div>
				<div>
					{!total 
					?<p>Your cart is empty</p> 
					:<p>Total price: &#8364;&nbsp;{subtotal}</p>
					}
					<button className="btn-white-lg" onClick={this.handleClick}>Add another course</button>
				</div>
				

				
				<p></p><br /> {/* adding a blank line, I know this is not smart but who cares? */}
				
				
                
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
