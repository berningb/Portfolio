import React, { Component } from 'react';
import './App.css';
import linkedIn from './Images/LI-In-Bug.png'
import ProjectList from './Components/ProjectList.js'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="Main-Content" style={{width: '100%', margin: 'auto', display: 'flex',  flexDirection: 'column', alignItems: 'center'}}>
            <div style={{width: '90%', display: 'flex', height: 100}}>
              <div style={{width: '30%', textAlign: 'center', margin: 'auto'}}>
                <h1 style={{textAlign: 'right'}}>Brandon Berning</h1>
              </div>
              <div style={{width: '50%', textAlign: 'center', margin: 'auto'}}>
                <p>Web Designer & Developer in Camden Tennessee</p>
              </div>
              <div style={{width: '20%', textAlign: 'center', margin: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <div className='box' style={{flexGrow: 2}}>Portfolio</div>
                <div className='box'style={{flexGrow: 2}}>Writing</div>
                <div className='box'style={{flexGrow: 2}}>About</div>
              </div>
            </div>
            <div className='content' style={{width: '80%'}}>
              <ProjectList/>

            </div>
        </div>
      </div>
    );
  }
}

export default App;
