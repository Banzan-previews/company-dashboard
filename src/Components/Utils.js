import styled from 'styled-components';

export const Space = styled.div`
  width : 100%;
  height : ${props =>props.size? `${props.size}px` : `50px`};
`;

export const ChartContainer = styled.div`
    padding : 10px;
    box-shadow : 0px 0px 5px 5px rgba(226, 200, 252, 0.221);
    background-color : white;
    border-radius : 20px;
    width : 100%;
    margin : 10px;
    max-width : 600px;
    max-width : ${props=> props.maxWidth? `${props.maxWidth}px` : '600px' } ;

`

export const ChartTitle = styled.div`
    font-weight : bold;
    padding : 5px;
    text-align : center;

`
