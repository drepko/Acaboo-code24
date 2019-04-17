import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getUniversities } from '../../actions/universities'
import { getStudies, setSelectedStudy, setSelectedUniversity, clearSelectedStudy } from '../../actions/studies'
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

    async handleUniversitySelect(event) {
        const selectedIndex = event.target.options.selectedIndex;
        const id = event.target.options[selectedIndex].getAttribute('id')
        await this.setState({ university: { id, name: event.target.value } });
        this.props.setSelectedUniversity(this.state.university)
        this.props.getStudies(id)
        await this.props.clearSelectedStudy()
    }

    async handleStudySelect(event) {
        const selectedIndex = event.target.options.selectedIndex;
        const id = event.target.options[selectedIndex].getAttribute('id')
        await this.setState({
            study: { id, name: event.target.value} });
        await this.props.setSelectedStudy(this.state.study)
    }

    handleSubmit(event) {
        event.preventDefault();
        if(this.state.university.name && this.state.study.name) {
        this.props.setSelectedUniversity(this.state.university)
        this.props.setSelectedStudy(this.state.study)
        this.props.history.push(`/courses/${this.state.university.name}/${this.state.study.name}`)
        } 
        else {
        this.props.history.push(`/courses`)
        }
    }

    render() {
        return this.props.universities === null ? <p>Loading ...</p> :
            <Form
                onSubmit={this.handleSubmit}
                handleUniversitySelect={this.handleUniversitySelect}
                handleStudySelect={this.handleStudySelect}
                universities={this.props.universities}
                selectedUniversity={this.props.selectedUniversity}
                studies={this.props.studies}
                selectedStudy={this.props.selectedStudy}
            />
    }
}

const mapStateToProps = state => ({
    universities: state.universities,
    studies: state.studies,
    selectedUniversity: state.selectedUniversity,
    selectedStudy: state.selectedStudy
})

export default connect(mapStateToProps, { getUniversities, getStudies, setSelectedStudy , setSelectedUniversity, clearSelectedStudy})(FindCourseContainer)
