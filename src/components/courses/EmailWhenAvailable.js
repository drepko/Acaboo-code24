import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import EmailForm from '../layout/EmailForm'
import { subscribeCourse } from '../../actions/subscribe'

class EmailWhenAvailable extends PureComponent {
    state = {
        email: '',
        study: ''
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            study: this.props.study.id
        })
    }

    onSubmit = (event) => {
        console.log('subcsribe course', 'study', this.props.study.id )
        event.preventDefault()
        this.setState({
            email: '',
            study: ''
        })
        this.props.subscribeCourse(this.state)
    }

    render() {
        return (
            <div>
            <h1>Oops! We don’t offer your course yet!</h1>
            <p>Let me know when available</p>
            <EmailForm
                onSubmit={this.onSubmit}
                onChange={this.onChange}
                formValues={this.state}
            />
            
            </div>)
    }
}

const mapStateToProps = (state) => ({
    //courses: state.courses,
    study: state.selectedStudy
})

export default connect(mapStateToProps, {subscribeCourse})(EmailWhenAvailable)
