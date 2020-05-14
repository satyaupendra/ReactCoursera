import React, { Component } from 'react';
import 'bootstrap';
class Comments extends React.Component{
constructor(props){
    super(props)
}

render(){
    const comment=this.props.s.map(i=>{
        const date = new Date(i.date)
        return(
            <div className="comments" key={i.id}>
                <p>{i.comment}</p>
                <p>--{i.author}, {date.toDateString()}</p>
            </div>
        )
    })
   
    return(
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {comment}
        </div>
    )
}

}
export default Comments;