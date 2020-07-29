import React, { Component } from 'react'

import fakeData from '../../API/fakeData'
import ProjectBox from './Components/ProjectBox'
import ShowCaseBox from './Components/ShowCaseBox.js'

import '../../Styles/Portfolio.css';

export default class Portfolio extends Component {
    render() {
        let mostRecentProject = null
        let projectBoxes = []
        const projects = fakeData.projects

        projects.forEach((project, i) => {
            if (i === 0) {
                mostRecentProject = <ShowCaseBox data={project}/>
            } else {
                projectBoxes.push(<ProjectBox data={project}/>)
            }
        });

        return (
            <div className='portfolio'>
                <div className='showCase'>
                    {mostRecentProject}
                </div>

                <div className='projectList'>
                    {projectBoxes}
                </div>
            </div>
        )
    }
}