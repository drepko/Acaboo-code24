import React from'react'
import {baseUrl} from '../../constants'
import "../../styles/App.css"
import EmailwhenAvailable from './EmailWhenAvailable'

export default function Course(props) {

    if(props.course.provided){
        return (<div  className="main-row margin-bottom">
                    <div className="main-row border-thin-grey max-width-med">
                        <div className="padding-side-small">
                            <img className="image-book" alt={props.course.name} src={`${baseUrl}${props.course.image}`} />
                        </div>
                        <div className="flex-column medium-div ai-start padding-tb">
                            <div className="text-sm-med-black text-start">
                                <p>{props.course.name}</p>
                            </div>
                            <div className="max-width-small text-sm-grey">
                                <p>{props.course.description}</p>
                            </div>
                        </div>
                        <div className="text-sm-med-black">
                            <p>&#8364;&nbsp;{props.course.price.toFixed(2).toString().replace(".", ",")}&nbsp;</p>
                        </div>
                    </div> 
                    <div className="padding-side-small max-width-xsmall">
                            <button className="btn-white-med text-sm-blue margin-side"
                            onClick = {props.signUp} 
                            value = {props.course.id}>Select course</button>
                    </div>
                </div>)  }

        return (<div id = 'course-container' className="main-row margin-bottom">
                    <div className="main-row border-thin-grey max-width-med">
                        
                        <div className="padding-side-small">
                            {/* <img className="image-book" alt={props.course.name} src={no_image} /> */}
                        </div>
                        
                        <div className="flex-column medium-div ai-start padding-tb">
                            <div className="text-sm-med-black text-start">
                                <p>{props.course.name}</p>
                            </div>

                            <div className="max-width-small text-sm-grey">
                                <p>{props.course.description}</p>
                            </div>

                            <EmailwhenAvailable 
                            id={props.course.id}
                            course={props.course.name}
                            />
                        </div>

                    </div>
                        <div className="padding-side-small max-width-xsmall ">
                            <p className="text-sm-black">Unavailable</p>
                        </div>
                    </div> 
                )

}




