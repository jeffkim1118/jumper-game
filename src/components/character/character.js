import React, {useEffect} from 'react';
import Jumper from '../../images/character.jpg';
import Movement from './movement';

function Character(){
    useEffect(() => {
        document.addEventListener('keydown', detectKeyDown, true)
    }, [])

    const detectKeyDown = (e) => {
       if(e.key){<Movement direction={e.key}/>}
    }
    
    return (
        <div>
            <img className="jumper" src={Jumper} alt="jumper"/>
        </div>
    )
}
export default Character;
