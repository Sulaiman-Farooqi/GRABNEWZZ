
import React, { Component } from 'react'


export class Newsitem extends Component  {
    
    render(){
        const {title,description,imageurl,newsurl ,author,date}=this.props
        
        
        return (
            <div>
                <div className="cont">
                    <div className="card" style={{width: "18rem"}}>
                        <img src={!imageurl?"https://image.cnbcfm.com/api/v1/image/106816845-1609213716683-gettyimages-1229866474-JAPAN_JPX.jpeg?v=1634773785":imageurl} className="card-img-top" alt="..."/>
                        <div className ="card-body">
                        <h5 className ="card-title">{title}</h5>
                        <p className ="card-text">{description} </p>
                        <p className="card-text" style={{fontWeight:"bolder"}}><small className="text-muted">{!author?"unknown":author}  ,Last updated {date} ago</small></p>
                        <a href={newsurl} target ref="_blank" style={{color:"white",backgroundColor:"grey",border:"1px solid grey"}} className ="btn btn-primary">click..</a>
                      <span style={{marginLeft:"3px"}} className="badge bg-secondary">New</span>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}

export default Newsitem
