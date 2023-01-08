import React, {useEffect, useState} from 'react';
import Jumper from '../../images/character.jpg';


function Character(){
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    let jumper = document.getElementsByClassName("jumper")
    
    function moveRight(){
        jumper.style.left = parseInt(jumper.style.left) + 5 + "px";
    }

    function moveLeft(){
        jumper.style.left = parseInt(jumper.style.left) - 5 + "px";
    }

    function makeJump(){
        jumper.style.top = parseInt(jumper.style.top) - 5 + "px"
    }


    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true)
    }, [])

    const detectKeyDown = (e) => {
       if(e.key === "ArrowRight"){
        moveRight();
       }else if(e.key === "ArrowLeft"){
        moveLeft();
       }else if(e.key === "ArrowUp" || " "){
        makeJump()
       }
    }
    
    return (
        <div>
            <img className="jumper" style={{top:"80vh", left:"0px", right:"0px", position:"relative"}} src={Jumper} alt="jumper"/>
        </div>
    )
}
export default Character;
