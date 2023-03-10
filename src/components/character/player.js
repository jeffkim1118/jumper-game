import React from "react"
import Jumper from '../../images/character.jpg';
let gravity;


class Player extends React.Component{
    constructor(props){
        super(props)
        this.state = { left:930, top:890, keyCodes: [], dropSpeed:props.dropSpeed};
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    
    moveRight = () => {
        if(this.state.left < 1800){
            this.setState({
                left: parseInt(this.state.left) + 50.25
            });
        }
        
    }

     moveLeft = () => {
        if(this.state.left > 50){
            this.setState({
                left: parseInt(this.state.left) - 50.25
            });  
        }
       
    }

     makeJump = () => {
        this.setState({
            top: parseInt(this.state.top) - 70
        })        
    }

    goDown = () => {
        if(this.state.top < 890){
            this.setState({
                top: parseInt(this.state.top) + 20
            })
        }
        
    }

    // coordX(){
    //     x = v * Math.cos(ang) * t;
    //     return x;
    // }

    // coordY(){
    //     y = ( v * Math.sin(ang) * t ) - (0.5 * a *(t*t));
    //     return y;
    // }

    gravity(){
        // let gravity = 0.2;
        // let friction = 0.98;
        // console.log(this.state.top)
        if(this.state.top < 890){
            gravity = setInterval(() => { 
                this.setState({top: parseInt(this.state.top) + this.state.dropSpeed}, () => {
                    if(this.state.top > 890){
                        this.props.handleGravity(this.state.top)
                        clearInterval(gravity);
                    }else if(this.state.top < 890){
                        this.props.handleGravity(this.state.top)
                    }
                })
            }, 100);
        }
    }

    handleKeyPress(e){
        switch(e.which){
            case 39:
                if (this.state.keyCodes[this.state.keyCodes.length-1] === 38 || this.state.keyCodes[this.state.keyCodes.length-1] === 32) {
                    const time = setInterval(() => {
                        this.setState({left: parseInt(this.state.left) + 3.5/2*3, top: parseInt(this.state.top) - 2.5/2*3})
                    }, 100);
                    setTimeout(() => {
                        clearInterval(time)
                    }, 3000);
                    // this.setState({left: parseInt(this.state.left) + 90, top: parseInt(this.state.top) - 50})
                    this.setState({keyCodes: []})
                } else {
                    this.setState({keyCodes: []})
                    this.moveRight();
                }
                
                break;
            case 37:
                if (this.state.keyCodes[this.state.keyCodes.length-1] === 38 || this.state.keyCodes[this.state.keyCodes.length-1] === 32) {
                    this.setState({left: parseInt(this.state.left) - 90, top: parseInt(this.state.top) - 50})
                    this.setState({keyCodes: []})
                }else{
                    this.setState({keyCodes: []})
                    this.moveLeft();
                }
                break;
            case 38:
                this.setState({
                    keyCodes: [...this.state.keyCodes, 38]
                })
                setTimeout(() => {
                    this.setState({keyCodes: []})
                },1000)
                
                this.makeJump();
                break;
            case 32:
                this.setState({
                    keyCodes: [...this.state.keyCodes, 32]
                })
                this.makeJump();
                break;
            case 40:
                this.setState({keyCodes: []})
                this.goDown();
                break;
            default:
                this.setState({keyCodes: []})
                this.gravity();
        }
    }

    componentDidMount(){
        document.addEventListener("keydown", this.handleKeyPress)    
    }

    componentWillReceiveProps(ownProps) {
        if (this.state.dropSpeed !== ownProps.dropSpeed) {
            this.setState({
                dropSpeed: ownProps.dropSpeed,
            });
        }
    }

    componentDidUpdate(){
       
    }
    render(){
        console.log(this.state.top)
        // console.log(this.state.keyCodes);
        return(
            <div className="jumper" style={{top:this.state.top+"px", left:this.state.left+"px"}}>
                <img className="jumper-img" src={Jumper} alt="jumper"/>
            </div>
        )
    }
}
export default Player;