import React from 'react'
import image_1 from '../../images/life-at-acaboo/image_1.png'
import image_2 from '../../images/life-at-acaboo/image_2.png'
import image_3 from '../../images/life-at-acaboo/image_3.png'
import image_4 from '../../images/life-at-acaboo/image_4.png'
import image_5 from '../../images/life-at-acaboo/image_5.png'

export default class LifeComponent extends React.Component {

    render(){
        return(
            <div className="">
                <p className="text-med-black">Life at Acaboo</p>
                <p className="text-sm-black">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa. We are located in the heart of education in Amsterdam, right in the Vrije Universiteit Amsterdam </p>           
                    <div className ="flex-column fw">
                    <div className="flex-row display-flex">
                        <div className="img-with-text">
                            <img src={image_1} className="image-med-lg" alt="image1" />
                            <p className="text-sm-grey"> It enables my students to get the most out of a course, everytime...</p>
                        </div>
                        <div className="img-with-text">
                            <img src={image_2} className="image-med-lg" alt="image2" />
                            <p className="text-sm-grey">It enables my students to get the most out of a course, everytime...</p>
                        </div>
                    </div>
                    <div className="flex-row display-flex">        
                        <div className="img-with-text">
                            <img src={image_3} className="image-med-lg" alt="image3" />
                            <p className="text-sm-grey">It enables my students to get the most out of a course, everytime...</p>
                        </div>
                        <div className="img-with-text">
                            <img src={image_4} className="image-med-lg" alt="image4" />
                            <p className="text-sm-grey">It enables my students to get the most out of a course, everytime...</p>
                        </div>
                    </div>  
                    <div className="flex-row display-flex">
                        <div className="img-with-text">
                                <img src={image_5} className="image-med-lg" alt="image5" />
                                <p className="text-sm-grey">It enables my students to get the most out of a course, everytime...</p>
                            </div>
                            <div className="img-with-text">
                                <img src={image_3} className="image-med-lg" alt="image6" />
                                <p className="text-sm-grey">It enables my students to get the most out of a course, everytime...</p>
                            </div>
                    </div>  
                        
                    </div>
           
           
            </div>

        )
    }
}