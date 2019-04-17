import React from'react'
import {baseUrl} from '../../constants'
import "../../styles/App.css"
import EmailwhenAvailable from './EmailWhenAvailable'

export default function Course(props) {

if(props.course.provided){
        return (<div className="main border-thin-grey">

                <div className="flex-row jc-between">
                    <div>
                        <img className="image-large" alt={props.course.name} src={`${baseUrl}${props.course.image}`} />
                    </div>
                    <div className="flex-column medium-div">
                        <div className="text-med-left">
                            <p>{props.course.name}</p>
                        </div>
                        <div>
                            <p>{props.course.description}</p>
                        </div>
                    </div>
                    <div>
                        <p>&#8364; {props.course.price}</p>
                    </div>
                    <div>
                        <button className="btn-white-med right"
                        onClick = {props.signUp} 
                        value = {props.course.id}>Select this course</button>
                    </div>
                </div> 
            </div>)  }
            return (<div className="main-small">
            <div className="flex-row jc-between">
                <div className="flex-column medium-div">
                    <div className="text-med-left">
                        {/* <p>{props.course.name}</p> */}
                    </div>
                    <div>
                        <p>{props.course.description}</p>
                    </div>
                    <EmailwhenAvailable 
                    id={props.course.id}
                    course={props.course.name}
                    />
                </div>
                <div>
                    <p>Not Available</p>
                </div>
            </div> 
        </div>)

}

