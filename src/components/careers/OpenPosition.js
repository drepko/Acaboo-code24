import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/OpenPosition.css'

export default class Mission extends React.Component {

    render(){
        return(
            <div className="">
                <p className="text-med-black">Open Positions</p>
                <p className="text-sm-grey">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa</p>
                
                <div className="">
                <table className="job-table">
                  <tbody>
                    <tr className="row0 border-bottom-grey">
                      <td className="cell0-0 text-sm-black padding-tb">Sales</td>
                      <td className="cell0-1 text-sm-grey">Fulltime</td>
                      <td className="cell0-2 text-sm-black"><Link to="/jobdetails">Learn more &#8594;</Link></td>
                    </tr>
                    <tr className="row1 border-bottom-grey">
                      <td className="cell1-0 text-sm-black padding-tb">Digital Marketing internship</td>
                      <td className="cell1-1 text-sm-grey">Internship - 6 Months</td>
                      <td className="cell1-2 text-sm-black"><Link to="/jobdetails">Learn more &#8594;</Link></td>
                    </tr>
                    <tr className="row2 border-bottom-grey">
                      <td className="cell2-0 text-sm-black padding-tb">Frontend development</td>
                      <td className="cell2-1 text-sm-grey">Fulltime</td>
                      <td className="cell2-2 text-sm-black"><Link to="/jobdetails">Learn more &#8594;</Link></td>
                    </tr>
                  </tbody>
                </table>
                </div>
                <p className="text-sm-grey padding-tb">Didn’t find your positions but still think you are a fit? 
                    <Link to="/email"><b className="text-sm-black">&nbsp;Drop us an email!</b></Link>
                       
                </p>
            </div>

        )
    }
}