import React from 'react'
import deskLamp from "../../images/mock-ups/deskLamp.png"
import woman_desk2 from  '../../images/mock-ups/woman_desk2.png'
export default class Mission extends React.Component {

    render(){
        return(
            <div className="">
                <p className="text-med-black">Mission Acaboo</p>
                <p className="text-sm-grey">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa. Four years ago I started my bachelors in business. Just like all of my fellow students I bought all the required books for the first courses and to be honest, those were the last books bought during the entire study.</p>

                <div className="main-row">
                    <img alt="desklamp" className="image_lg" src={deskLamp} />
                    <img alt="woman_desk2" className="image_lg" src={woman_desk2} />
                </div>
            </div>

        )
    }
}
