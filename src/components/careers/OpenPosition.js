import React from 'react'
import { Link } from "react-router-dom";
import '../../styles/OpenPosition.css'

export default class Mission extends React.Component {

    render(){
        return(
            <div className = 'open-position-main'>
                <h2>Open Positions</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa</p>
                <div className = "add jobs">

                <table className = "job-table">
        <tbody>
          <tr className="row0">
            <td className="cell0-0">Sales</td>
            <td className="cell0-1">Fulltime</td>
            <td className="cell0-2">Learn more-></td>
          </tr>
          <tr className="row1">
            <td className="cell1-0">Digital Marketing internship</td>
            <td className="cell1-1">Internship - 6 Months</td>
            <td className="cell1-2"><Link to="/jobdetails">Learn more-></Link></td>
          </tr>
          <tr className="row2">
            <td className="cell2-0">Frontend development</td>
            <td className="cell2-1">Fulltime</td>
            <td className="cell2-2">Learn more-></td>
          </tr>
        </tbody>
      </table>


                </div>
                <p>Didn’t find your positions but still think you are a fit? 
                    <Link to="/email"> <b> Drop us an email!</b></Link>
                       
                </p>
            </div>

        )
    }
}
