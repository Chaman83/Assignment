import styled from "styled-components";

export const DealMainWrapper = styled.div`
    display: flex;
flex-direction: column;
/* margin-top: -35px; */
background-color: #f0efee;
/* padding-top: 40px; */
width: 100%;
/* padding-right: 40px; */
`
export const DealTextWrap =styled.div`
display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px;
    align-items: baseline;
`;

export const CardWrap = styled.div`
width: 77%;
    display: flex;
    flex-direction: row;
    background-color: white;
    border-radius: 20px;
    margin-left: 20px;
    padding-left: 20px;
`;
export const InnerText = styled.div`
    display: flex;
    flex-direction: column;
    text-wrap: nowrap;
    width: 50%;
`;