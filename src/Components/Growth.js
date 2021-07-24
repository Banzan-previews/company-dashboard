import React,{useState} from 'react'
// import RoboChart from '@postlight/react-google-sheet-to-chart';
import Chart from "react-google-charts";

import styled from 'styled-components';
import { Space ,ChartContainer , ChartTitle} from './Utils';

import { RenderCharts } from './RenderCharts';



const Loading = ()=>{
    return(
        <div>Loading Chart</div>
    )
}


const chartData = [
    {
        id:'1',
        ChartTitle:'Numzy',
        // maxWidth:'1000',
        width: '100%',
        height: 300,
        chartType:"Line",
        spreadSheetUrl:"https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8",
        spreadSheetQueryParameters:{
                headers: 1,
                query: 'SELECT A, B , C',
                sheet : 'Numzy'
            },
        options :{
                colors:['#7142db','#61d7a1','#7ccdf9'],
                hAxis: {},
                vAxis: {format: 'short'},
            },
        controls:[
            {
                controlType: 'DateRangeFilter',
                options: {
                filterColumnLabel: 'Date',
                ui: { 
                    label : '',
                    format: { pattern: 'dd/M/yyyy' }, 
                    labelStacking : 'vertical',
                    cssClass : 'graph-control',
                    // selectedValuesLayout : 'below',
                    // orientation : 'vertical',
                    },
                },
            }],

        rootProps :{ 'data-testid': '5' }
    },
    {
        id:'2',
        ChartTitle:'Numzy (Active)',
        maxWidth:'380',
        width: '100%',
        height: 300,
        chartType:"Line",
        spreadSheetUrl:"https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8",
        spreadSheetQueryParameters:{
                headers: 1,
                query: 'SELECT A, E',
                sheet : 'Numzy'
            },
        options :{
                colors:['#7ccdf9','#7142db','#61d7a1'],
                hAxis: {},
                vAxis: {format: 'short'},
            },
        controls:[
            {
                controlType: 'DateRangeFilter',
                options: {
                filterColumnLabel: 'Date',
                ui: { 
                    label : '',
                    format: { pattern: 'dd/M/yyyy' }, 
                    labelStacking : 'vertical',
                    cssClass : 'graph-control',
                    // selectedValuesLayout : 'below',
                    // orientation : 'vertical',
                    },
                },
            }],

        rootProps :{ 'data-testid': '5' }
    },
    {
        id:'3',
        ChartTitle:'Yes/No',
        // maxWidth:'1000',
        width: '100%',
        height: 300,
        chartType:"Line",
        spreadSheetUrl:"https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8",
        spreadSheetQueryParameters:{
                headers: 1,
                query: 'SELECT A, B , C',
                sheet : 'Yes_or_No'
            },
        options :{
                colors:['#7142db','#61d7a1','#7ccdf9'],
                hAxis: {},
                vAxis: {format: 'short'},
            },
        controls:[
            {
                controlType: 'DateRangeFilter',
                options: {
                filterColumnLabel: 'Date',
                ui: { 
                    label : '',
                    format: { pattern: 'dd/M/yyyy' }, 
                    labelStacking : 'vertical',
                    cssClass : 'graph-control',
                    // selectedValuesLayout : 'below',
                    // orientation : 'vertical',
                    },
                },
            }],

        rootProps :{ 'data-testid': '7' }
    },
    {
        id:'4',
        ChartTitle:'Yes/No (Active)',
        maxWidth:'380',
        width: '100%',
        height: 300,
        chartType:"Line",
        spreadSheetUrl:"https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8",
        spreadSheetQueryParameters:{
                headers: 1,
                query: 'SELECT A, E',
                sheet : 'Yes_or_No'
            },
        options :{
                colors:['#7ccdf9','#7142db','#61d7a1'],
                hAxis: {},
                vAxis: {format: 'short'},
            },
        controls:[
            {
                controlType: 'DateRangeFilter',
                options: {
                filterColumnLabel: 'Date',
                ui: { 
                    label : '',
                    format: { pattern: 'dd/M/yyyy' }, 
                    labelStacking : 'vertical',
                    cssClass : 'graph-control',
                    // selectedValuesLayout : 'below',
                    // orientation : 'vertical',
                    },
                },
            }],

        rootProps :{ 'data-testid': '5' }
    },
    {
        id:'5',
        ChartTitle:'TymPass With BaBlah',
        // maxWidth:'1000',
        width: '100%',
        height: 300,
        chartType:"Line",
        spreadSheetUrl:"https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8",
        spreadSheetQueryParameters:{
                headers: 1,
                query: 'SELECT A, B , C',
                sheet : 'TymPass With BaBlah'
            },
        options :{
                colors:['#7142db','#61d7a1','#7ccdf9'],
                hAxis: {},
                vAxis: {format: 'short'},
            },
        controls:[
            {
                controlType: 'DateRangeFilter',
                options: {
                filterColumnLabel: 'Date',
                ui: { 
                    label : '',
                    format: { pattern: 'dd/M/yyyy' }, 
                    labelStacking : 'vertical',
                    cssClass : 'graph-control',
                    // selectedValuesLayout : 'below',
                    // orientation : 'vertical',
                    },
                },
            }],

        rootProps :{ 'data-testid': '8' }
    },
    {
        id:'6',
        ChartTitle:'TymPass (Active)',
        maxWidth:'380',
        width: '100%',
        height: 300,
        chartType:"Line",
        spreadSheetUrl:"https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8",
        spreadSheetQueryParameters:{
                headers: 1,
                query: 'SELECT A, E',
                sheet : 'TymPass With BaBlah'
            },
        options :{
                colors:['#7ccdf9','#7142db','#61d7a1'],
                hAxis: {},
                vAxis: {format: 'short'},
            },
        controls:[
            {
                controlType: 'DateRangeFilter',
                options: {
                filterColumnLabel: 'Date',
                ui: { 
                    label : '',
                    format: { pattern: 'dd/M/yyyy' }, 
                    labelStacking : 'vertical',
                    cssClass : 'graph-control',
                    // selectedValuesLayout : 'below',
                    // orientation : 'vertical',
                    },
                },
            }],

        rootProps :{ 'data-testid': '5' }
    },
    {
        id:'7',
        ChartTitle:'Target',
        maxWidth:'380',
        width: '100%',
        // height: 300,
        chartType:"Table",
        spreadSheetUrl:"https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8",
        spreadSheetQueryParameters:{
                headers: 1,
                query: 'SELECT A, B , C',
                sheet : 'Manage'
            },
        options :{
                colors:['#7ccdf9','#7142db','#61d7a1'],
                hAxis: {},
                vAxis: {format: 'short'},
            },
        controls:[
            {
                controlType: 'DateRangeFilter',
                options: {
                filterColumnLabel: 'Deadline',
                ui: { 
                    label : '',
                    format: { pattern: 'dd/M/yyyy' }, 
                    labelStacking : 'vertical',
                    cssClass : 'graph-control',
                    },
                },
            }],
    

        rootProps :{ 'data-testid': '9' }
    },
]



export default function Growth(props) {


    return (
        <>
            {chartData.map(chart=>{
                return(<RenderCharts key={chart.id} data={chart} />)
            })}

            <Space size={300}/>
        </>
    )
}


