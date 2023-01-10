import React from "react";

// class Platform extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {left: 400, top: 500}
//     }
//     render(){
//         return(           
//             <div className="platform" style={{top:this.state.top+"px", left:this.state.left+"px"}}></div>
//         )
//     }
// }
function Platform({top}){
    return(
        <div className="platform" style={{left:200+"px", top:top}}></div>
    )
}

export default Platform;