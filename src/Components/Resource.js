
import React from 'react'
// import RoboChart from '@postlight/react-google-sheet-to-chart';
// import styled from 'styled-components';
import Chart from "react-google-charts";

import { Space ,ChartContainer , ChartTitle} from './Utils';

export default function Resource(props) {


    return (
        <>

            {/* =========================== */}
            {/* =========================== */}
            {/* =========================== */}

            <ChartContainer maxWidth={1000} >
                <ChartTitle>
                    Total Budget
                </ChartTitle>
                <Chart
                    width={'100%'}
                    height={250}
                    chartType="BarChart"
                    spreadSheetUrl="https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8"
                    spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT G, H, I',
                        sheet: 'Resources'
                    }}
                    options={{
                        pieSliceText: 'value',
                        bars: 'vertical',
                        colors:['#7142db','#a5a6ab'],
                        hAxis: {
                            minValue: 0,
                        },
                        vAxis: {

                        },
                    }}

                    rootProps={{ 'data-testid': '1' }}
                />

            </ChartContainer>


            {/* =========================== */}
            {/* =========================== */}
            {/* =========================== */}
            
            <ChartContainer maxWidth={500} >
                <ChartTitle>
                    Budget allocation
                </ChartTitle>
                <Chart
                    width={'100%'}
                    height={400}
                    chartType="PieChart"
                    spreadSheetUrl="https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8"
                    spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, B',
                        sheet: 'Resources'
                    }}
                    options={{
                        pieSliceText: 'value',
                        colors:['#a5a6ab','#7ccdf9','#7142db'],
                        hAxis: {

                        },
                        vAxis: {

                        },
                    }}

                    rootProps={{ 'data-testid': '1' }}
                />

            </ChartContainer>


            {/* =========================== */}
            {/* =========================== */}
            {/* =========================== */}

            <ChartContainer maxWidth={500} >
                <ChartTitle>
                    Budget Quota
                </ChartTitle>
                <Chart
                    width={'100%'}
                    height={400}
                    chartType="ColumnChart"
                    spreadSheetUrl="https://docs.google.com/spreadsheets/d/10E37Oi6bAc_a0iT1BYHr62FpwdLQGKP0ILvHLptlbV8"
                    spreadSheetQueryParameters={{
                        headers: 1,
                        query: 'SELECT A, B, C',
                        sheet: 'Resources'
                    }}
                    options={{
                        pieSliceText: 'value',
                        bars: 'vertical',
                        colors:['#7142db','#ed4b7c','#61d275'],
                        hAxis: {

                        },
                        vAxis: {

                        },
                    }}

                    rootProps={{ 'data-testid': '1' }}
                />

            </ChartContainer>


            {/* =========================== */}
            {/* =========================== */}
            {/* =========================== */}

        </>
    )
}
