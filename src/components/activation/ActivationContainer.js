import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { verifyEmail } from '../../actions/activate'

class ActivationContainer extends PureComponent {

    state = { activated: false }

    componentWillMount = () => {
        const uid = this.props.match.params.uid
        const token = this.props.match.params.token
        const data = { uid, token }
        this.props.verifyEmail(data)
    }

    render() {
        const { activated } = this.props
        return (
            activated === null ? <p>Activating account...</p> : activated === false ? <p>Something went wrong...</p> : <p>Activated!</p>
        )
    }
}

const mapStateToProps = function (state) {
	return {
		activated: state.activate
	}
}

export default connect(mapStateToProps, { verifyEmail })(ActivationContainer)
