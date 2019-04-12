import React from'react'
import {baseUrl} from '../../constants'

export default function Course(props) {

        return (
            <div>
                <img alt={props.course.name} src={`${baseUrl}${props.course.image}`}/>
                <p>{props.course.name}</p>
                <p>{props.course.description}</p>
                <p>{props.course.price}</p>
                <button 
                onClick = {props.signUp} 
                value = {props.course.id} 
                name = {props.course.name} 
                price = {props.course.price}
                image = {`${baseUrl}${props.course.image}`} 
                >Select this course</button>
            </div>)
    
}

