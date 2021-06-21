import React from 'react'
import Data from './Data'
function Table(){
    return( <><h1>Team Allocation</h1>
        <h3>Working Projects</h3>
          <tr className="rowd">
            <th>Name</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thrusday</th>
            <th>Friday</th>
            <th>Comments</th>
        
          </tr>
          
        {Data.map((val)=>{
          return(
          <tr>
          <td><b>{val.name}</b></td>
            {val.project.map((vals)=>{
              return(
            <td>{vals.working_project}</td>
            )})}
            <td>{val.comment}</td>
          </tr>);
        })}
        
        </>
        )
}
export default Table;