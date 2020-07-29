import React, { Component } from 'react';
import '../../../Styles/ProjectBox.scss';

class ProjectListBox extends Component {
    render() {
        const { data } = this.props
        return (
            <div className="project-box pop">
                <img alt="thumbnail" src={data.image}/>
                <div className="info-container">
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                </div>
            </div>
        )
    }
}


export default ProjectListBox;
