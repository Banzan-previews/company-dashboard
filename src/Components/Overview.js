import React from 'react'
import { RenderCharts } from './RenderCharts';
// import Chart from "react-google-charts";
// import RoboChart from '@postlight/react-google-sheet-to-chart';
// import styled from 'styled-components';
// import { ChartContainer , ChartTitle} from './Utils';


const chartData = [

    {
        id:'1',
        ChartTitle:'Total Followers',
        maxWidth:'1000',
        width: '100%',
        height: 500,
        chartType:"SteppedAreaChart",
        spreadSheetUrl:"https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8",
        spreadSheetQueryParameters:{
            headers: 1,
            query: 'SELECT A, H, J,  I ',
            sheet: 'Master Graph'
            },
        options :{
            colors:['#7142db','#61d7a1','#f39564'],
                hAxis: {},
                vAxis: {format: 'short'},
            },
        controls:[
            {
                controlType: 'DateRangeFilter',
                options: {
                filterColumnLabel: 'DATE',
                ui: { format: { pattern: 'dd/MM/yyyy' } },
                },
            }],
            

        rootProps :{ 'data-testid': '2' }
    
    },
    {
        id:'2',
        ChartTitle:'Insta  @gobablah',
        maxWidth:'400',
        width: '100%',
        height: 400,
        chartType:"SteppedAreaChart",
        spreadSheetUrl:"https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8",
        spreadSheetQueryParameters:{
            headers: 1,
            query: 'SELECT A,K',
            sheet: 'Master Graph'
            },
        options :{
            colors:['#ed4b7c'],
            hAxis: {},
            vAxis: {format: 'short'},
            },
        controls:[
            {
                controlType: 'DateRangeFilter',
                options: {
                filterColumnLabel: 'DATE',
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
                
        rootProps :{ 'data-testid': '3' }
    
    },
    {
        id:'3',
        ChartTitle:'Twitter  @BaBlahComics',
        maxWidth:'400',
        width: '100%',
        height: 400,
        chartType:"SteppedAreaChart",
        spreadSheetUrl:"https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8",
        spreadSheetQueryParameters:{
            headers: 1,
            query: 'SELECT A, L',
            sheet: 'Master Graph'
            },
        options :{
            colors:['#7ccdf9'],
            hAxis: {},
            vAxis: {format: 'short'},
            },
        controls:[
            {
                controlType: 'DateRangeFilter',
                options: {
                filterColumnLabel: 'DATE',
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

        rootProps :{ 'data-testid': '4' }
    
    },
    

]

export default function Home(props) {


    return (
        <>

            {chartData.map(chart=>{
                return(<RenderCharts key={chart.id} data={chart} />)
            })}

        </>
    )
}
