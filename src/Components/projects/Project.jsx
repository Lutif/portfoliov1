import React from 'react';
import './Projects.css';
import image from './images/keeper.PNG'

export default function Project(props)

{

    return <div className='projectContainer'  >
        <div className='projectImage'>
            {/* <img src={require(`${props.content.image}`)}
        alt ='' /> */}
        </div>
        <div className='.projectDescription'>
            <h4>{props.content.image}</h4>
            <p>{props.content.intro}</p>
            <h5>Technologies and problems</h5>
            <p>{props.content.tech}
            </p>
        </div>
    </div>
}


