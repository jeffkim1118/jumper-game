import React from "react"
import Jumper from '../../images/character.jpg';

class Player extends React.Component{
    constructor(props){
        super(props)
        this.state = { left:500, top:500};
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    
    moveRight = () => {
        this.setState({
            left: parseInt(this.state.left) + 5
        });
    }

     moveLeft = () => {
        this.setState({
            left: parseInt(this.state.left) - 5
        });  
    }

     makeJump = () => {
        this.setState({
            top: parseInt(this.state.top) - 5
        })        
    }

    goDown = () => {
        this.setState({
            top: parseInt(this.state.top) + 5
        })
    }

    handleKeyPress(e){
        console.log(e.which)
        switch(e.which){
            case 39:
                this.moveRight();
                break;
            case 37:
                this.moveLeft();
                break;
            case 38:
                this.makeJump();
                break;
            case 32:
                this.makeJump();
                break;
            case 40:
                this.goDown();
                break;
            default:
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyPress)
    }

    render(){
        
        return(
            <div className="jumper" style={{top:this.state.top+"px", left:this.state.left+"px"}}>
                <img className="jumper-img" src={Jumper} alt="jumper"/>
            </div>
        )
    }
}
export default Player;