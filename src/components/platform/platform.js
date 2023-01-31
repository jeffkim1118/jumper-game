import React from "react";

class Platform extends React.Component{
    constructor(props){
        super(props);
        this.state = {left: 400, top: props.height}
    }
    
    getPosition(){
        
    }

    render(){
        return( 
            <div>
                
                <div className="platform" style={{top:this.state.top+"px", left:this.state.left+"px"}}></div>
               
            </div>
            
        )
    }
}


export default Platform;