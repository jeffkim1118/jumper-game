import React from "react"
import Jumper from '../../images/character.jpg';

class Player extends React.Component{
    constructor(props){
        super(props)
        this.state = { left:530, top:530};
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    
    moveRight = () => {
        this.setState({
            left: parseInt(this.state.left) + 15.25
        });
    }

     moveLeft = () => {
        this.setState({
            left: parseInt(this.state.left) - 15.25
        });  
    }

     makeJump = () => {
        this.setState({
            top: parseInt(this.state.top) - 70
        })        
    }

    goDown = () => {
        this.setState({
            top: parseInt(this.state.top) + 20
        })
    }

    gravity(){
        // let gravity = 0.2;
        // let friction = 0.98;
        let gravity
        if(this.state.top !== 530 || this.state.top < 530){
            gravity = setInterval(() => {
                this.setState({top: parseInt(this.state.top) + 10})
            }, 100);
        }else if(this.state.top > 530){
            clearInterval(gravity)
        }
    }

    handleKeyPress(e){
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
                this.gravity();
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyPress)

        // if(this.state.top <= 530){
        //     setInterval(() => {
        //         this.setState({top: parseInt(this.state.top) + 10})
        //     }, 100);
        // }
        // do{
        //     setInterval(() => {
        //         this.setState({top: parseInt(this.state.top) + 10})
        //     }, 100);
        // }while(this.state.top === 530)
        this.gravity()
        
    }

    render(){
        console.log(this.state.top)
        return(
            <div className="jumper" style={{top:this.state.top+"px", left:this.state.left+"px"}}>
                <img className="jumper-img" src={Jumper} alt="jumper"/>
            </div>
        )
    }
}
export default Player;