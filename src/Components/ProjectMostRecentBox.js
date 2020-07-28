import React, { Component } from 'react';


class ProjectMostRecentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.data.title,
            description: this.props.data.description,
            image: this.props.data.image
        }
    }
    componentDidMount() {
        console.log(this.props.data)
    }
    render() {
        return (
            <div style={{color: 'white', display: 'flex', flexDirection: 'row', backgroundColor: '#282c34', border: '1px solid black', justifyContent: 'center', alignItems: 'center', marginBottom: 40}}>
                <div style={{width: '30%', height: 300, marginBottom: 40, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <img src={this.state.image} height='200' width = '200'/>
                </div>              
                
                <div style={{width: '70%'}}>
                <h1>{this.state.title}</h1>
                <p>{this.state.description}</p>
                <p>Check it out!</p>
                </div>
          </div>
        )
    }
}


export default ProjectMostRecentBox;
