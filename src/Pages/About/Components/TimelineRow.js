import React, { Component } from 'react'
import '../../../Styles/TimelineRow.scss'

export default class TimelineRow extends Component {
    render() {
   
        return (
            <div className={this.props.right ? 'right timeline-row': 'timeline-row'}>
                <div className='card pop'>
                    <div className='card-header'>
                        {this.props.data.title}
                    </div>
                    <div className='card-body'>
                        <p>{this.props.data.description}</p>
                    </div>
                </div>
                <div className='icon'>
                    <div className='pop'></div>
                </div>
                <div className='date'>
                    January 1st 2018
                </div>
            </div>
           
        )
    }
}
