import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import axios from 'axios';

class Chart1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nurses: [
                {
                    "recommendation_type": "Recommend HbA1c QIM-1.2",
                    "nurse_details": [
                        {
                            "nurse_id": 1,
                            "count_details": [
                                {
                                    "visit_date": "2011-Sep-01",
                                    "recommendation_count": 15,
                                    "recommendation_success": 14
                                },
                                {
                                    "visit_date": "2011-Sep-21",
                                    "recommendation_count": 25,
                                    "recommendation_success": 24
                                },
                                {
                                    "visit_date": "2011-Sep-11",
                                    "recommendation_count": 35,
                                    "recommendation_success": 24
                                },
                                {
                                    "visit_date": "2011-Sep-22",
                                    "recommendation_count": 30,
                                    "recommendation_success": 26
                                },
                                {
                                    "visit_date": "2011-Sep-12",
                                    "recommendation_count": 26,
                                    "recommendation_success": 26
                                }
                            ]
                        },
                        {
                            "nurse_id": 2,
                            "count_details": [
                                {
                                    "visit_date": "2011-Sep-01",
                                    "recommendation_count": 35,
                                    "recommendation_success": 24
                                },
                                {
                                    "visit_date": "2011-Sep-21",
                                    "recommendation_count": 25,
                                    "recommendation_success": 24
                                },
                                {
                                    "visit_date": "2011-Sep-11",
                                    "recommendation_count": 35,
                                    "recommendation_success": 24
                                },
                                {
                                    "visit_date": "2011-Sep-22",
                                    "recommendation_count": 30,
                                    "recommendation_success": 26
                                },
                                {
                                    "visit_date": "2011-Sep-12",
                                    "recommendation_count": 26,
                                    "recommendation_success": 26
                                }
                            ]
                        },
                        {
                            "nurse_id": 3,
                            "count_details": [
                                {
                                    "visit_date": "2011-Sep-01",
                                    "recommendation_count": 15,
                                    "recommendation_success": 14
                                },
                                {
                                    "visit_date": "2011-Sep-21",
                                    "recommendation_count": 25,
                                    "recommendation_success": 24
                                },
                                {
                                    "visit_date": "2011-Sep-11",
                                    "recommendation_count": 35,
                                    "recommendation_success": 24
                                },
                                {
                                    "visit_date": "2011-Sep-22",
                                    "recommendation_count": 30,
                                    "recommendation_success": 26
                                },
                                {
                                    "visit_date": "2011-Sep-12",
                                    "recommendation_count": 26,
                                    "recommendation_success": 26
                                }
                            ]
                        }
                    ]
                },
                {
                    "recommendation_type": "Recommend HbA1c QIM-1.1",
                    "nurse_details": [
                        {
                            "nurse_id": 1,
                            "count_details": [
                                {
                                    "visit_date": "2011-Sep-01",
                                    "recommendation_count": 18,
                                    "recommendation_success": 14
                                },
                                {
                                    "visit_date": "2011-Sep-21",
                                    "recommendation_count": 28,
                                    "recommendation_success": 24
                                },
                                {
                                    "visit_date": "2011-Sep-11",
                                    "recommendation_count": 35,
                                    "recommendation_success": 34
                                },
                                {
                                    "visit_date": "2011-Sep-22",
                                    "recommendation_count": 30,
                                    "recommendation_success": 26
                                },
                                {
                                    "visit_date": "2011-Sep-12",
                                    "recommendation_count": 26,
                                    "recommendation_success": 26
                                }
                            ]
                        },
                        {
                            "nurse_id": 2,
                            "count_details": [
                                {
                                    "visit_date": "2011-Sep-01",
                                    "recommendation_count": 25,
                                    "recommendation_success": 24
                                },
                                {
                                    "visit_date": "2011-Sep-21",
                                    "recommendation_count": 35,
                                    "recommendation_success": 28
                                },
                                {
                                    "visit_date": "2011-Sep-11",
                                    "recommendation_count": 35,
                                    "recommendation_success": 24
                                },
                                {
                                    "visit_date": "2011-Sep-22",
                                    "recommendation_count": 30,
                                    "recommendation_success": 26
                                },
                                {
                                    "visit_date": "2011-Sep-12",
                                    "recommendation_count": 26,
                                    "recommendation_success": 26
                                }
                            ]
                        },
                        {
                            "nurse_id": 3,
                            "count_details": [
                                {
                                    "visit_date": "2011-Sep-01",
                                    "recommendation_count": 15,
                                    "recommendation_success": 14
                                },
                                {
                                    "visit_date": "2011-Sep-21",
                                    "recommendation_count": 25,
                                    "recommendation_success": 24
                                },
                                {
                                    "visit_date": "2011-Sep-11",
                                    "recommendation_count": 35,
                                    "recommendation_success": 28
                                },
                                {
                                    "visit_date": "2011-Sep-22",
                                    "recommendation_count": 30,
                                    "recommendation_success": 28
                                },
                                {
                                    "visit_date": "2011-Sep-12",
                                    "recommendation_count": 30,
                                    "recommendation_success": 26
                                }
                            ]
                        }
                    ]
                }
            ],
            chartData: {},

        };
    }

    componentDidMount() {
        this.getChartData()
    }

    onChange = (event) => {
        const qim = event.target.value;
        const nurseid = this.state.nurses
            .filter((param) => param.recommendation_type === qim)
            .map((options =>
                options.nurse_details.map(nurseid =>
                    nurseid.nurse_id
                )))

        const recommendcount = this.state.nurses
            .filter((param) => param.recommendation_type === qim)
            .map((options =>
                options.nurse_details.map(nurseid =>
                    nurseid.count_details.reduce((a, b) =>
                        ({ recommendation_count: a.recommendation_count + b.recommendation_count })
                    )
                )))

        const recommendsuccess = this.state.nurses
            .filter((param) => param.recommendation_type === qim)
            .map((options =>
                options.nurse_details.map(nurseid =>
                    nurseid.count_details.reduce((a, b) =>
                        ({ recommendation_success: a.recommendation_success + b.recommendation_success })
                    )
                )))
        
        const recommendcount1 = recommendcount.map(data => data.map(sucess => sucess.recommendation_count))
        const recommendsuccess1 = recommendsuccess.map(data => data.map(sucess => sucess.recommendation_success))
        console.log(recommendsuccess1, 'recomenddd');
        console.log(recommendcount1, 'recomendddqqq');
        console.log(nurseid, 'nurseid1');

        this.setState({
            chartData: {
                labels: nurseid[0],
                datasets: [{
                    label: 'QIMs Recommended',
                    data: recommendcount1[0],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',],
                },
                {
                    label: 'QIMs Done',
                    data: recommendsuccess1[0],
                    backgroundColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',], 
                }
                ]
            }
        });

    }

    getChartData = async () => {
        const nurses = this.state.nurses;
        console.log(nurses, 'nurses');
        let nurseid = this.state.nurses
            .map((options =>
                options.nurse_details.map(nurseid =>
                    nurseid.nurse_id
                )))

        const recommendcount = this.state.nurses
            .map((options =>
                options.nurse_details.map(nurseid =>
                    nurseid.count_details.reduce((a, b) =>
                        ({ recommendation_count: a.recommendation_count + b.recommendation_count })
                    )
                )))
        const recommendsuccess = this.state.nurses
            .map((options =>
                options.nurse_details.map(nurseid =>
                    nurseid.count_details.reduce((a, b) =>
                        ({ recommendation_success: a.recommendation_success + b.recommendation_success })
                    )
                )))
        this.setState({
            chartData: {
                labels: nurseid[0],
                datasets: [{
                    label: 'QIMs Recommended',
                    data: recommendcount[0],
                    backgroundColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 99, 132, 1)',], borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(255, 99, 132, 1)',
                            'rgba(255, 99, 132, 1)',],
                    borderWidth: 1
                },
                {
                    label: 'QIMs Done',
                    data: recommendsuccess[0],
                    backgroundColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(54, 162, 235, 1)',], borderColor: [
                            'rgba(54, 162, 235, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(54, 162, 235, 1)',],
                    borderWidth: 1
                }
                ]
            }
        });
    }



    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Axios</h2>
                    <select onChange={this.onChange}>
                        <option>&nbsp;</option>
                        {
                            this.state.nurses.map
                                ((qim) => <option
                                >{qim.recommendation_type}</option>
                                )
                        }
                    </select>
                </form>
                <Bar data={this.state.chartData} height="400" width="400"
                    options={{
                        title: {
                            display: this.state.displayTitle,
                            text: this.state.location,
                            fontSize: 25
                        },
                        legend: {
                            display: this.state.displayLegend,
                            position: this.state.legendPosition
                        }
                    }} />
            </div>
        );
    }
}

export default Chart1;