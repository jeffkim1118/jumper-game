import React from 'react';
import bird from '../../images/bird.jpg';

class Bird extends React.Component{
    constructor(props){
        super(props);
        this.state={left: 700, top: 300, width:50, height:50};
    }
    render(){
        return (
            <div className="bird" style={{top:this.state.top+"px", left:this.state.left+"px"}}>
                <img className="bird-img" src={bird} alt="bird"/>
            </div>
        )
    }
}
export default Bird;