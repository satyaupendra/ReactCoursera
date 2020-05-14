import React from 'react';
import {CardImg,CardText, CardTitle,Card, CardBody} from 'reactstrap';
class DishDetail extends React.Component{
    constructor(props){
        super(props);
     }
     renderComments(dish){
        return dish.map((i)=>{
            console.log(i);
            const date = new Date(i.date);
            return(
                <li key={i.id} >
                    {i.comment}
                    <br /><br />
                    -- {i.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(i.date)))}
                    <br /><br />
                </li>
            )
        })
    }
    render()
    {
        return(
            <>
                <div className="col-12 col-md-5 m-1 align-items-center">
                    <Card>
                         <CardImg  width="100%"  src={this.props.selected.image} alt={this.props.selected.image}/>
                        <CardBody>
                        <CardTitle>{this.props.selected.name}</CardTitle>
                        <CardText>{this.props.selected.description}</CardText>
                        </CardBody>
                    </Card>
                    </div>
                <div className="col-12 col-md-5 m-1">
                     <h4>Comments</h4>
                     <ul className="list-unstyled">
                    {this.renderComments(this.props.selected.comments)}
                    </ul>
                    </div>
</>

        )
    }
}
export default DishDetail;