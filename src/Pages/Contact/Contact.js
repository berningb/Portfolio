import React from 'react'
import Header from '../../Components/Header.js'
import '../../Styles/Contact.scss';
import github from '../../Images/github.svg';
import cloud from '../../Images/cloud.svg'
import LinkedIn from '../../Images/linkedin.svg'
import Email from '../../Images/mail.svg'
import { Link } from "react-router-dom";

export default function Contact() {

    return (
        <div className='contact'>
            <Header />
            <div className='wrap'>
                <div className='contact-intro'>
                    <h1>Available for Freelance Work</h1>
                    <p>
                       Need help from a professional programmer? 
                       {`\n`} Contact me and let's get started!
                    </p>
                </div>
                <hr></hr>
                <h1>Contact Me</h1>
                <div className='contact-section'>
                    <div className='contact-item'>
                        <img src={LinkedIn} alt='d' style={{height: 50, width: 50}} />
                        <p>LinkedIn Profile</p>  
                        <a href='https://www.linkedin.com/in/brandonberning'>in/brandonberning</a>
                    </div>
                    <div className='contact-item'>
                        <img src={github} alt='d' style={{height: 50, width: 50}} />
                        <p>My Github</p>  
                        <a href='github.com'>github.com/berningb</a>
                    </div>
                    <div className='contact-item'>
                        <img src={Email} alt='d' style={{height: 50, width: 50}} />
                        <p>Email</p>  
                        <a href='github.com'>berningbrandon9@gmail.com</a>
                    </div>
                </div>
                <hr></hr>
                <Link to="/BrandonBerning-Resume.pdf" target="_blank" download>
                <p className='resume-download'>
                    <img className='icon' src={cloud} alt='s' /> 
                    Download my resume PDF</p>
                </Link>
                <object data="/BrandonBerning-Resume.pdf#view=FitH" type="application/pdf" width="60%" height="600">
                alt : <a href="/BrandonBerning-Resume.pdf">test.pdf</a>
                </object>
            </div>
        </div>
    )
}
