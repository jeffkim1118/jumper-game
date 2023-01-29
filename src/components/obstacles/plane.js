import React from "react";
import plane from "../../images/plane.jpg";

class Plane extends React.Component{
    constructor(props){
        super(props);
        this.state = {left:300, top:100, width:75, height:75}
    }

    componentDidMount(){
    
    }

    render(){
        let hitbox = this.state.width * this.state.height;
        console.log(hitbox)
        return (
            <div className="plane" style={{left:this.state.left+'px', top:this.state.top+'px'}}>
                <img className="plane-img" src={plane} alt="plane"></img>
            </div>
        )
    }
}
export default Plane;