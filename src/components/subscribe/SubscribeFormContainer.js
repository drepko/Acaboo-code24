import React from 'react'
import { connect } from 'react-redux'
import SubscribeForm from './SubscribeForm'
import { subscribeNewsletter } from '../../actions/subscribe'

class SubscribeFormContainer extends React.Component {
    state = {
        email: ''
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.setState({
            email: ''
        })
        this.props.subscribeNewsletter(this.state)
    }

    render() {
        return (
            <SubscribeForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                formValues={this.state}
            />)
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { subscribeNewsletter})(SubscribeFormContainer)
