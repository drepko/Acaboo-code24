import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { verifyEmail } from '../../actions/activate'

class ActivationContainer extends PureComponent {

    state = { activated: false }

    componentWillMount = () => {
        const uid = this.props.match.params.uid
        const token = this.props.match.params.token
        const slicedUid = uid.slice(4)
        const slicedToken = token.slice(6)
        const data = { uid: slicedUid, token: slicedToken }
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
