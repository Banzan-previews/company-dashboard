import React from 'react'
import { RenderCharts } from './RenderCharts';
// import styled from 'styled-components';

// import { Space} from './Utils';


const chartData = [
    {
        id:'1',
        ChartTitle:'Quater plan!',
        maxWidth:'1000',
        width: '100%',
        height: 300,
        chartType:"Timeline",
        spreadSheetUrl:"https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8",
        spreadSheetQueryParameters:{
                headers: 1,
                query: 'SELECT A, B, C, D',
                sheet: 'Timeline'
            },
        options :{
                colors: ['#7142db', '#7ccdf9', '#f39564', '#61d7a1'],
                hAxis: {},
                vAxis: {format: 'short'},
            },
        controls:[
            {
                controlType: 'DateRangeFilter',
                options: {
                filterColumnLabel: 'Start',
                ui: { 
                    label : '',
                    format: { pattern: 'dd/M/yyyy' }, 
                    labelStacking : 'vertical',
                    // cssClass : 'graph-control',
                    // selectedValuesLayout : 'below',
                    // orientation : 'vertical',
                    },
                },
            }],

        rootProps :{ 'data-testid': '1' }
    }
]

export default function Timeline(props) {
    

    return (
        <>
            {chartData.map(chart=>{
                return(<RenderCharts key={chart.id} data={chart} />)
            })}
        </>
    )
}


