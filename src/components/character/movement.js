
export default function Movement({direction}){
    function jump(){

    }
    function moveRight(){

    }
    function moveLeft(){

    }

    if(direction === "ArrowUp" || direction === ""){
        jump();
    }else if(direction === "ArrowRight"){
        moveRight();
    }else if(direction === "ArrowLeft"){
        moveLeft();
    }
}