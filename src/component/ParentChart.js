import React, { Component } from 'react'
import Chart from './Chart'


class ParentChart extends Component {
    constructor() {
        super();
        this.state = {
            chartData: {}
        }
    }

    componentWillMount() {
        this.getchartData()
    }

    getchartData() {
        this.setState({
            chartData: {
                labels: ['Nurse1', 'Nurse2', 'Nurse3'],
              datasets: [{
                label: 'QIMs Recommended',
                data: [200, 165, 260,],
                backgroundColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 99, 132, 1)',    ],    borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 99, 132, 1)',
                  'rgba(255, 99, 132, 1)',    ],
              borderWidth: 1
          },
          {
                  label: 'QIMs Done',
                data: [150, 128, 200,],
                backgroundColor: [
                  'rgba(54, 162, 235, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(54, 162, 235, 1)',    ],    borderColor: [
                  'rgba(54, 162, 235, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(54, 162, 235, 1)',    ],
              borderWidth: 1}
          ]}
        });
    }

    render() {
        return (
            <div>
             {this.state.chartData?<Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom" />:''}   
            </div>
        )
    }

}

export default ParentChart;