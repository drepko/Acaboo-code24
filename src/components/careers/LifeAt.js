import React from 'react'
import life_image_1 from '../../images/life-at-acaboo/life-image-1.svg'
import life_image_2 from '../../images/life-at-acaboo/life-image-2.svg'
import life_image_3 from '../../images/life-at-acaboo/life-image-3.svg'
import life_image_4 from '../../images/life-at-acaboo/life-image-4.svg'
import life_image_5 from '../../images/life-at-acaboo/life-image-5.svg'
import life_image_6 from '../../images/life-at-acaboo/life-image-6.svg'

export default class LifeComponent extends React.Component {

    render(){
        return(
            <div className = 'life-component-main'>
                <h2>Life at Acaboo</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa. We are located in the heart of education in Amsterdam, right in the Vrije Universiteit Amsterdam </p>           
                    <div className ="life-images">
                        <img src={life_image_1} className="life-image-1" alt="image1" />
                        <p>It enables my students to get the most out of a course, everytime...</p>

                        <img src={life_image_2} className="life-image-2" alt="image2" />
                        <p>It enables my students to get the most out of a course, everytime...</p>

                        <img src={life_image_3} className="life-image-3" alt="image3" />
                        <p>It enables my students to get the most out of a course, everytime...</p>

                        <img src={life_image_4} className="life-image-4" alt="image4" />
                        <p>It enables my students to get the most out of a course, everytime...</p>

                        <img src={life_image_5} className="life-image-5" alt="image5" />
                        <p>It enables my students to get the most out of a course, everytime...</p>

                        <img src={life_image_6} className="life-image-6" alt="image6" />
                        <p>It enables my students to get the most out of a course, everytime...</p>
                    </div>
           
           
            </div>

        )
    }
}