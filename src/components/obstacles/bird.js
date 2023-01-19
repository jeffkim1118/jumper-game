import React from 'react';
import bird from '../../images/bird.jpg';

class Bird extends React.Component{
    constructor(props){
        super(props);
        this.state={left: 800, top: 300, width:50, height:50};
    }

    componentDidMount(){
        if(this.state.left >= 800){
            setInterval(() => {
                this.setState({left: parseInt(this.state.left) - 20})
                console.log(this.state.left)
            }, 1000);
        }else if (this.state.left <= 200){
            setInterval(() => {
                this.setState({left: parseInt(this.state.left) + 20})
            }, 1000);
        }

        

            // setInterval(() => {
            //     if(this.state.left > 1000){
            //         this.setState({left: parseInt(this.state.left) - 20})
            //     }else if(this.state.left < 1000){
            //         this.setState({left: parseInt(this.state.left) + 20})
            //     }
                
            // }, 1000);
        
        
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