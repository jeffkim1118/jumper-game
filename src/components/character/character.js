import React from 'react';
import UsePersonControls from './movement.js';
import jumper from '../../images/character.jpg';

function character(){
    const { forward, backward, left, right, jump } = UsePersonControls()
    return (
        <div>
            <img className="jumper" src={jumper} alt="jumper"/>
        </div>
    )
}
export default character;
