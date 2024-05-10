import styled from "styled-components";

export const SearchMainWrapper = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    justify-content: center; /* Center the search box horizontally */
    position: absolute;
    top: 35%; /* Center the search box vertically */
    left: 50%;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    transform: translate(-50%, 50%);
`;

export const SearchIconWrapper = styled.span`
    display: flex;
    position: absolute;
    opacity: 1;
    left: 10px; /* Adjust this value to position the icon horizontally */
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
`;

export const StyledInput = styled.input`
    border: 15px;
    border-radius: 10px;
    /* height: 32px; */
    height: 50px;
    width: 240px;
    padding-left: 40px; /* Adjust to accommodate the icon */
`;

export const PlaceholderText = styled.span`
    margin-left: 20px;
    color: #aaa; /* Placeholder text color */
`;
