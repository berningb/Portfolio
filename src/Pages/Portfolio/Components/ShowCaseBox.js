import React, { Component } from 'react';
import '../../../Styles/ShowCaseBox.scss';

class ShowCaseBox extends Component {
    render() {
        const { data } = this.props

        return (
            <div className="showcase-box pop">
                <div className='image-container'>
                    <img alt='thumbnail' src={data.image}/>
                </div>              
                
                <div style={{width: '70%'}}>
                    <h1>{data.title}</h1>
                    <p>{data.description}</p>
                    <p>Check it out!</p>
                </div>
            </div>
        )
    }
}


export default ShowCaseBox;
