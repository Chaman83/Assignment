import styled from "styled-components";

export const TabMainWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 10px;
    background-color: #f0efee;
    border-bottom: 2px solid #f0efee;
    p {
        padding: 10px;
        cursor: pointer;
        margin: 0px;
    }
    .active {
        border-bottom: 2px solid blue;
        color: blue;
    }
`;
