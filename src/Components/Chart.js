import React, { Component } from 'react'

import CanvasJSReact from '../canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Chart extends Component {

	render() {
		const options = {
		  title: {
			text: "Basic Column Chart in React"
		  },
		  data: [{				
					type: "column",
					dataPoints: [
						{ label: "Apple",  y: 40  },
						{ label: "Orange", y: 15  },
						{ label: "Banana", y: 25  },
						{ label: "Mango",  y: 30  },
						{ label: "Grape",  y: 28  }
					]
		   }]
	   }
			
	   return (
		  <div>
			<CanvasJSChart options = {options}
				/* onRef = {ref => this.chart = ref} */
			/>
		  </div>
		);
	  }
}
