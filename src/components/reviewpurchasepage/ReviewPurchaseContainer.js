import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import ProgressBar from '../layout/ProgressBar'
import ReviewPurchase from './ReviewPurchase'

class ReviewPurchaseContainer extends PureComponent {

	render() {
        // const {credentials} = this.props.currentUser
		return (
			<div>
                <ProgressBar />
                <ReviewPurchase />
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
