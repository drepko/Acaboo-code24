import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import University from './University'
import {getUniversities} from '../actions/universities'

class UniversityPageContainer extends PureComponent {

    componentWillMount() {
        const {universityId, studyId} = this.props.params.match
        this.props.getUniversities(universityId, studyId)
    }

    renderUniversities = (university) => {
        
        return (
            university.map((university) => {
                return <University university={university}/>
            }))
        
    }

    render() {
        const { universities } = this.props

        if (universities === null) return <p>Loading...</p>

        return (
            <div>
                {this.renderUniversities(universities)}
            </div>)
    }
}

const mapStateToProps = state => ({
    universities: state.universities === null
})

export default connect(mapStateToProps, { getUniversities })(UniversityPageContainer)
