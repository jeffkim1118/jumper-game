import React from "react";
import plane from "../../images/plane.jpg";

class Plane extends React.Component{
    constructor(props){
        super(props);
        this.state = {left:300, top:100}
    }

    render(){
        return (
            <div className="plane" style={{left:this.state.left+'px', top:this.state.top+'px'}}>
                <img className="plane-img" src={plane} alt="plane"></img>
            </div>
        )
    }
}
export default Plane;