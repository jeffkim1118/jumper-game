import React, {useEffect, useState} from 'react';
import Jumper from '../../images/character.jpg';


function Character(){
    const[x, setX] = useState(50);
    const[y, setY] = useState(500);

    let jumper = document.getElementsByClassName("jumper")
    
    function moveRight(){
        setX(x+5)
        console.log(x)
        // jumper.style.left = parseInt(jumper.style.left) + 5 + "px";
    }

    function moveLeft(){
        setX(x-5)
        
        // jumper.style.left = parseInt(jumper.style.left) - 5 + "px";
    }

    function makeJump(){
        setY(x-20)
     
        // jumper.style.top = parseInt(jumper.style.top) - 5 + "px"
    }

    function goDown(){
        setY(x+5)
    
    }

    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown)
    }, [])

    const detectKeyDown = (e) => {
        console.log(e)
       if(e.which === 39){
        moveRight();
       }else if(e.which === 37){
        moveLeft();
       }else if(e.which === 38 || 32){
        makeJump()
       }else if(e.which === 40){
        goDown()
       }
    }
    
    return (  
        <div className="jumper" style={{top:y+"px", left:x+"px"}}>
            {/* <img className="jumper-img" src={Jumper} alt="jumper"/> */}
        </div>
    )
}
export default Character;
