import React, { Component } from 'react';
import ProjectListBox from './ProjectListBox.js'
import ProjectMostRecentBox from './ProjectMostRecentBox.js'
import fakeData from '../API/fakeData'

class ProjectList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projects: fakeData.projects
        }
    }

    render() {
        let mostRecentProject = null
        let projectBoxes = []

        this.state.projects.forEach((project, i) => {
            if (i ==0) {
                mostRecentProject = <ProjectMostRecentBox data={project}/>
            } else {
                projectBoxes.push(<ProjectListBox data={project}/>)

            }
        });

        return (
            <div className='listContainer'>
                <div className='mostRecent'>
                    {mostRecentProject}
                </div>

                <div className='projectList'>
                    {projectBoxes}
                </div>
              </div>
        )
    }
}


export default ProjectList;
