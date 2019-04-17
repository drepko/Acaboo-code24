import React from'react'
import {baseUrl} from '../../constants'
import "../../styles/App.css"
import EmailwhenAvailable from './EmailWhenAvailable'
import CardColumns from "react-bootstrap/CardColumns"
import Card from 'react-bootstrap/Card';

export default function Course(props) {

if(props.course.provided){
        return (<div className="main">
                <CardColumns className="row">
                    <Card className="padding">
                        <Card.Img variant="top" className="image-small card-img-bottom" alt={props.course.name} src={`${baseUrl}${props.course.image}`}/>
                        <Card.Title>{props.course.name}</Card.Title>
                    </Card>
                </CardColumns>
                </div>)


{/* <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title that wraps to a new line</Card.Title>
      <Card.Text>
        This is a longer card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card> */}

        // return (<div className="main border-thin-grey">

        //         <div className="flex-row jc-between">
        //             <div>
        //                 <img className="image-book" alt={props.course.name} src={`${baseUrl}${props.course.image}`} />
        //             </div>
        //             <div className="flex-column medium-div">
        //                 <div className="text-med-left">
        //                     <p>{props.course.name}</p>
        //                 </div>
        //                 <div>
        //                     <p>{props.course.description}</p>
        //                 </div>
        //             </div>
        //             <div>
        //                 <p>&#8364; {props.course.price}</p>
        //             </div>
        //             <div>
        //                 <button className="btn-white-med right"
        //                 onClick = {props.signUp} 
        //                 value = {props.course.id}>Select this course</button>
        //             </div>
        //         </div> 
        //     </div>)  }
        //     return (<div className="main-small">
        //     <div className="flex-row jc-between">
        //         <div className="flex-column medium-div">
        //             <div className="text-med-left">
        //                 <p>{props.course.name}</p>
        //             </div>
        //             <div>
        //                 <p>{props.course.description}</p>
        //             </div>
        //             <EmailwhenAvailable id={props.course.id}/>
        //         </div>
        //         <div>
        //             <p>Not Available</p>
        //         </div>
        //     </div> 
        // </div>)

}
}

