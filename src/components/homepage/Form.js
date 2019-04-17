import React, { Component } from 'react'

export default class Course extends Component {

    renderUniversityOptions = () => {
        return (<div>
                    <select class="form-control form-control-sm" onChange={this.props.handleUniversitySelect}>
                        <option value="" disabled selected>Select your university...</option>
                        {this.props.universities.map((university) => {
                            return <option key={university.id} id={university.id} value={university.name}>{university.name}</option>
                        })}
                    </select><br />
                </div>)
    }

    renderStudyOptions = () => {
        const { studies } = this.props
        return (
            studies === null ?
            <div >
                <select class="form-control form-control-sm" disabled >
                    <option value="" disabled selected>First select your university</option>
                </select><br/>
            </div>
                :
            <div >
                <select class="form-control form-control-sm" onChange={this.props.handleStudySelect}>
                    <option value="" disabled selected>Select your study...</option>
                        {this.props.studies.map((studie) => {
                            return <option key={studie.id} id={studie.id} value={studie.name}>{studie.name}</option>
                        })}
                </select><br/>
            </div>
        )
    }

    render() {
        return (
            <div className="half-width ai-start">
                <form className=""
                        onSubmit={this.props.onSubmit}>
                    {this.renderUniversityOptions()}
                    {this.renderStudyOptions()}
                    {/* {study && study.name !== null &&  */}
                    <input type="submit" value="Find your course" className=" form-control form-control-sm btn-blue-xl"/>

                </form>
            </div>
        )
    }
}