import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { getUniversities } from '../../actions/universities'
import { getStudies, setSelectedStudy } from '../../actions/studies'
import {getCourses} from '../../actions/courses'
import Filter from './CourseFilter'
class CourseFilter extends PureComponent {

    constructor(props) {
        super(props);

        this.handleUniversitySelect = this.handleUniversitySelect.bind(this);
        this.handleStudySelect = this.handleStudySelect.bind(this);
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
        this.setState({ university: { id: id, name: event.target.value } });
        this.props.getStudies(id)

        console.log("UNIVERSITIES",this.state.university)
    }

    async handleStudySelect(event) {
        const selectedIndex = event.target.options.selectedIndex;
        const id = event.target.options[selectedIndex].getAttribute('id')
        console.log("******",id,event.target.value)
       await this.setState({
             study: { id, name: event.target.value} });
             await this.props.setSelectedStudy(this.state.study)
             //this.props.getCourses(this.props.study.id)
             this.props.history.push(`/courses/${this.state.university.name}/${this.state.study.name}`)

            

    }


    render() {
        console.log("STUDY state ",this.state.study)
        return this.props.universities === null ? <p>Loading ...</p> :
            <Filter
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
    university: state.university,
    studies: state.studies,
    study: state.selectedStudy
})

export default connect(mapStateToProps, { getUniversities, getStudies, setSelectedStudy ,getCourses})(CourseFilter)
