import React from 'react';
import bird from '../../images/bird.jpg';

let birdInterval;

class Bird extends React.Component{
    constructor(props){
        super(props);
        this.state={left: props.left, top: props.top, width:50, height:50, changeAmount: props.changeAmount};
    }

    componentDidMount(){
        if (this.state.left > 200) {
            const birdInterval = setInterval(() => {
                this.setState({left: parseInt(this.state.left) + this.state.changeAmount }, () => {
                    if (this.state.left < 200) {
                        this.props.handleBird(this.state.left);
                        // clearInterval(birdInterval);
                    }else if(this.state.left > 800){
                        this.props.handleBird(this.state.left);
                    }
                })
            }, 250);
        }

        if (this.state.left <= 200) {
            const birdInterval = setInterval(() => {
                this.setState({left: parseInt(this.state.left) +20 }, () => {
                    if (this.state.left > 800) {
                        clearInterval(birdInterval);
                    }
                })
            }, 1000);
        }

    }

    componentWillReceiveProps(ownProps) {
        if (this.state.changeAmount !== ownProps.changeAmount) {
            this.setState({
                changeAmount: ownProps.changeAmount,
            });
        }

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