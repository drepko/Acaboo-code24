import React from 'react'
import { connect } from 'react-redux'
import EmailForm from '../layout/EmailForm'
import { subscribeNews } from '../../actions/subscribe'

class SubscribeForm extends React.Component {
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
            
            <EmailForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                formValues={this.state}
            />

            </div>)
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {subscribeNews})(SubscribeForm)
