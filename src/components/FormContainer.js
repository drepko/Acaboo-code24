import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getUniversities } from '../actions/universities'
import { getStudies } from '../actions/studies'
import Form from './Form'

class CoursePageContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        university: {id: null, name: null},
        study: null
    }

    componentWillMount() {
        this.props.getUniversities()
    }

    handleChange(event) {
        const selectedIndex = event.target.options.selectedIndex;
        const id = event.target.options[selectedIndex].getAttribute('id')
        this.setState({ university: {id, name: event.target.value} });
        this.props.getStudies(id)
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return this.props.universities === null ? <p>Loading ...</p> :
            <Form
                handleChange={this.handleChange}
                universities={this.props.universities}
                university={this.state.university}
            />
    }
}

const mapStateToProps = state => ({
    universities: state.universities,
    studies: state.studies
})

export default connect(mapStateToProps, { getUniversities, getStudies })(CoursePageContainer)
