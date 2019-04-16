import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getUniversities } from '../../actions/universities'
import { getStudies, setSelectedStudy, setSelectedUniversity } from '../../actions/studies'
import Form from './Form'

class FindCourseContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.handleUniversitySelect = this.handleUniversitySelect.bind(this);
        this.handleStudySelect = this.handleStudySelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        university: { id: null, name: null },
        study: { id: null, name: null }
    }

    componentWillMount() {
        this.props.getUniversities()
    }

    handleUniversitySelect(event) {
        const selectedIndex = event.target.options.selectedIndex;
        const id = event.target.options[selectedIndex].getAttribute('id')
        this.setState({ university: { id, name: event.target.value } });
        this.props.getStudies(id)
    }

    handleStudySelect(event) {
        const selectedIndex = event.target.options.selectedIndex;
        const id = event.target.options[selectedIndex].getAttribute('id')
        this.setState({ study: { id, name: event.target.value } });
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.university.name && this.state.study.name) {
        this.props.setSelectedUniversity(this.state.university)
        this.props.setSelectedStudy(this.state.study)
        this.props.history.push(`/courses/${this.state.university.name}/${this.state.study.name}`)
        } 
    }

    render() {
        return this.props.universities === null ? <p>Loading ...</p> :
            <Form
                onSubmit={this.handleSubmit}
                handleUniversitySelect={this.handleUniversitySelect}
                handleStudySelect={this.handleStudySelect}
                universities={this.props.universities}
                university={this.state.university}
                study={this.state.study}
                studies={this.props.studies}
            />
    }
}

const mapStateToProps = state => ({
    universities: state.universities,
    studies: state.studies
})

export default connect(mapStateToProps, { getUniversities, getStudies, setSelectedStudy , setSelectedUniversity})(FindCourseContainer)
