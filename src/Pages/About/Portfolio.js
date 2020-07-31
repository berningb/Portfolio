import React, { Component } from 'react'
import ProjectBox from './Components/ProjectBox'
import '../../Styles/Portfolio.scss';

export default class Portfolio extends Component {
    render() {

        return (
            <div className='portfolio'>
                <h1>My Portfolio</h1>
                <div className='showcase'>
                    <ProjectBox/>
                    <ProjectBox/>
                    <ProjectBox/>
                </div>
            </div>
        )
    }
}