import React from 'react'
import {Line} from 'react-chartjs-2'
function LineChart() {
    const data={
        labels: ['jan','feb','mar','Apr','May'],
        datasets:[
            {
                label:'Alcohol',
                data:[3,2,2,1,5],
                borderColor:'rgba(255,0,0)',
                backgroundColor:'rgb(235,162,235)',
                pointBackgroundColor:'rgba(0,0,255)',
                pointBorderColor:'rgba(255,255,255)'

            }
            ,{
                label:'Malic Acid',
                data:[1,2,3,2,5],
                borderColor:'rgba(0,0,235)',
                 backgroundcolor:'rgb(235,162,235)',
                pointBackgroundColor:'rgba(255,0,0)',
                pointBorderColor:'rgba(255,206,255)'
            }
        ]
    }
    const options={
        title:{
            display:true,
            text:'Line Chart'
        },
        scales:{
            YAxes:[
                {
                    ticks:{
                        min:0,
                        max:6,
                        stepSize:1
                    }
                }
            ]
        }
    }
    return <Line data={data} options={options} />
    
}

export default LineChart
