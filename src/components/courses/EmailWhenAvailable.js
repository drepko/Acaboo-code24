import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import EmailForm from '../layout/EmailForm'
import { subscribeCourse } from '../../actions/subscribe'

class EmailWhenAvailable extends PureComponent {
    state = {
        email: '',
        sent: false
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
            sent: true
        })      
    }

    render() {
        return (
            !this.state.sent? 
            <div className="padding-bottom">
               
            <p className="text-sm-black">Oops! We don’t offer your course yet!<br/>
            Let me know when available</p>
            <EmailForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                formValues={this.state}
                value='Sent'
            />            
            </div>
            :
            <div>
                <p className="text-sm-black">We'll let you know when {this.props.course} is available.</p>
            </div>)
    }
}

const mapStateToProps = (state) => ({
    // courses: state.courses,
    // //study: state.selectedStudy
})

export default connect(mapStateToProps, {subscribeCourse})(EmailWhenAvailable)
