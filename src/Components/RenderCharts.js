import React from 'react';
import Chart from "react-google-charts";
import styled from 'styled-components';
import { Space} from './Utils';


export const ChartContainer = styled.div`
    padding : 10px;
    box-shadow : 0px 0px 5px 5px rgba(226, 200, 252, 0.221);
    background-color : white;
    border-radius : 20px;
    width : 100%;
    margin : 20px;
    padding : 20px;
    padding-bottom : 50px;
    // max-width : 600px;
    max-width : ${props=> props.maxWidth? `${props.maxWidth}px` : '600px' } ;

`

export const ChartTitle = styled.div`
    font-weight : bold;
    padding : 5px;
    text-align : center;

`

export const RenderCharts = ({ data }) => {
    return (
        <ChartContainer maxWidth={data.maxWidth}>
            <ChartTitle>
                {data.ChartTitle}
            </ChartTitle>
            <Space size={20}/>
            <Chart {...data} />

        </ChartContainer>
    );
};
