import styled from "styled-components";

export const ProductDetailContainer = styled.div`
    /* display: flex; */
    width: 80%;
    max-width: 800px; /* Adjust max-width as needed */
    margin: 0 auto;
`;

export const ProductImage = styled.img`
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto; /* Center the image */
`;
export const TitleWrap = styled.div`
    display: flex;
    flex-direction: column;
    /* margin: 0px 20px 0px; */
    justify-content: space-between;
    justify-items: baseline;
    svg{
        fill: #F8A819;
        path{
        stroke: #F8A819;
        }
    }
`;

export const ContentWrap = styled.div`
           display: flex;
    margin: 20px;
    justify-content: space-between;
    margin: 20px;
    p{
        margin: 0px;
        
    }
`;