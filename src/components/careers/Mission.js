import React from 'react'
import {home_lamp_img,mission_man_sitting}  from  '../../images/imagelinks'
export default class Mission extends React.Component {

    render(){
        return(
            <div className = 'mission-main'>
            <h1>Mission Acaboo</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa. Four years ago I started my bachelors in business. Just like all of my fellow students I bought all the required books for the first courses and to be honest, those were the last books bought during the entire study.</p>

                <div className = 'mission-image'>
                    <img className="search_image_1" src={home_lamp_img} />
                    <img className="search_image_1" src={mission_man_sitting} />
                </div>

            </div>

        )
    }
}
