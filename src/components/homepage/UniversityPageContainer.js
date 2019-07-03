import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import University from './University'
import {getUniversities} from '../../actions/universities'

class UniversityPageContainer extends PureComponent {

    componentWillMount() {
        this.props.getUniversities()
    }

    renderUniversities = (universities) => {
        
        return (
            universities.map((university) => {
                return <University university={university}/>
            })
            )
        
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
