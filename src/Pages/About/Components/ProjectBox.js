import React from 'react';
import {useSpring, animated, config} from 'react-spring';
import bunny from '../../../Images/bunny.jpg'
import '../../../Styles/ProjectBox.scss';


const ProjectBox = () => {
    const fade = useSpring({
    config: { duration: 1500},
    from: { opacity: 0 }, opacity: 1});



    return (
        <animated.div style={fade} className='project-box card pop'>
            <div class='card-header'>
                <img alt='t' src={bunny}/>
            </div>
            <div className='card-body'>
                <p>Consequat commodo quis amet in fugiat consequat dolore enim Lorem minim est ad. Mollit in excepteur velit cillum elit</p>
            </div>
        </animated.div>
    )
}
export default ProjectBox;