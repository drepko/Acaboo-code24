import React from 'react'
import { connect } from 'react-redux'
import EmailForm from '../layout/EmailForm'
import { subscribeNews } from '../../actions/subscribe'

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
        this.props.subscribeNews(this.state.email)
        this.setState({
            email: ''
        })
    }

    render() {
        return (
            <div>
            <p>The latest Acaboo news, articles, and <br />
            resources, sent straight to your inbox every <br />
            month.</p>
            <EmailForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                formValues={this.state}
            />
            <p>We’ll never share your details. See our Privacy Policy</p>

            </div>)
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {subscribeNews})(SubscribeFormContainer)
