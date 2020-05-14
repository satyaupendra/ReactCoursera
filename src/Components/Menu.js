import React,{Component} from 'react';
import {CardImg, Card, CardImgOverlay, CardTitle} from 'reactstrap';
import DishDetail from '../Components/DishDetail';
import Comments from '../Components/Comments';
class Menu extends Component{
    constructor(props){
    super(props);
    this.state={
        selectedDish:null
    }
} 
onDishSelect=(dish)=>{
    this.setState({selectedDish:dish})
}
renderDish(dish) {
    if (dish != null)
        return(
           <DishDetail selected={dish}/>
        );
    else
        return(
            <div></div>
        );
}
// renderComments(dish) {
//     if (dish != null)
//         return(
//            <Comments s={dish.comments}/>
//         );
//     else
//         return(
//             <div></div>
//         );
// }

render(){
        const menu=this.props.dishes.map(dish=>{
            return(
                <div className="col-12 col-md-5 m-1" key={dish.id}>
                    <Card onClick={()=>this.onDishSelect(dish)}>
                         <CardImg  width="100%"  src={dish.image} alt={dish.image}/>
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        })
        return(
        <div className="container">
                <div className="row align-content-center">
                    {menu}
                </div>
                <div className="row">
                {this.renderDish(this.state.selectedDish)}
                </div>
        </div>
        )
    }
};
export default Menu;
