import React, { Component } from 'react'
import profile from '../../Images/profile.jpg'
import Header from '../../Components/Header'
import Timeline from './Timeline';
import AnimatedCover from '../../Components/AnimatedCover'

import '../../Styles/About.scss'
import Portfolio from './Portfolio'

export default class AboutContainer extends Component {
    render() {
        return (
            <div className='about'>
                <div className='cover-wrapper'><AnimatedCover /></div>
                <div className='scene' style={{background: `#20333F`}}>
                    <Header />
                    <div className='profile-container'>
                        <h1>Brandon Berning</h1>
                        <h2>Web Developer & Designer</h2>
                        <img className='profile' alt='s' src={profile} />
                    </div>
                </div>
                
                <div className='info'>
                    <div className='about-me-intro'>
                        <p className='greeting'>Hey!</p>
                        <p>I'm Brandon Berning from Tennessee!</p>
                        <p>I love programming, as well as tennis, hiking and learning new things!</p>
                        <p>Feel free to get in touch or take a look at my past works!</p>
                    </div>
                </div>

                <Portfolio />
                <Timeline />
            </div>
           )
    }
}
