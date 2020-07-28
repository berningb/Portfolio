import React, { Component } from 'react';


class ProjectListBox extends Component {
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
            <div style={{width: 500, height: 200,  border: '1px solid black', marginBottom: 40, position: 'relative'}}>
                <img style={{width: 200, height: 200, opacity:.2}} src={this.state.image}/>
                <div style={{display: 'flex', alignItems: 'center', position: 'absolute', top: 0, left: 0, zIndex: 10, height: '100%'}}>
                    <div style={{width: '80%', textAlign: 'center', margin: 'auto', display: 'flex', flexDirection: 'column'}}>
                        <h1>{this.state.title}</h1>
                        <p>{this.state.description}</p>
                    </div>
                </div>
                
          </div>
        )
    }
}


export default ProjectListBox;
