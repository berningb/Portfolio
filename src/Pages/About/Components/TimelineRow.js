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
                        <a href={this.props.data.link}><span>Check it out!</span></a>
                    </div>
                </div>
                <div className='icon'>
                    <div className='pop'>
                        <img alt='icon' src={this.props.data.icon} />
                    </div>
                </div>
                <div className='date'>
                    {this.props.data.date}
                </div>
            </div>
           
        )
    }
}
