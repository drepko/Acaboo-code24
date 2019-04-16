import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import EmailForm from '../layout/EmailForm'
import { subscribeCourse } from '../../actions/subscribe'

class EmailWhenAvailable extends PureComponent {
    state = {
        email: '',
        message: 'Let me know when available'
    }
    
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    onSubmit = (event) => {
        event.preventDefault()
        const id = this.props.id
        this.props.subscribeCourse(this.state.email, id)

        this.setState({
            email: '',
            message: 'Thanks for your subscription!'
        })      
    }

    render() {
        return (
            <div>
            <p>Oops! We don’t offer your course yet!</p>
            <p>{this.state.message}</p>
            <EmailForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                formValues={this.state}
                value='Sent'
            />            
            </div>)
    }
}

const mapStateToProps = (state) => ({
    // courses: state.courses,
    // //study: state.selectedStudy
})

export default connect(mapStateToProps, {subscribeCourse})(EmailWhenAvailable)
