import React, { Component } from 'react'
import '../../Styles/Timeline.scss'

import fakeData from '../../API/fakeData'
import TimelineRow from './Components/TimelineRow'

export default class Timeline extends Component {
    

    render() {
        let timelineRows = []
        fakeData.projects.forEach((element, index) => {
            timelineRows.push( <TimelineRow data={element} right={index % 2} />)
        });

        return (
            <div className='timeline-wrapper'>
                <h1>Timeline</h1>
                <div className='timeline-row-container'>
                    <div className='timeline-core'></div>
                    {timelineRows}
                </div>
            </div>
        )
    }
}
