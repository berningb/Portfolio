import React from 'react'
import Header from '../../Components/Header.js'
import Chart from '../../Components/Chart.js'
import '../../Styles/Contact.scss';
import github from '../../Images/GitHub-Mark-64px.png';

export default function Contact() {

    return (
        <div className='contact'>
            <Header />
            <Chart />
            <div className='links'>
                <img alt='github' src={github} />
            </div>
        </div>
    )
}
