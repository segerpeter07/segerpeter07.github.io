import styled from 'styled-components';

export const CardContainer = styled.div`
    width: 33%;
    padding: 1%;

    @media only screen and (max-width: 1000px) {
        width: 100%;
    }
`;

export const ContentScollBox = styled.div`
    max-height: 650px;
    overflow-y: auto;

    @media only screen and (max-width: 1000px) {
        max-height: 300px;
    }    
`;

export const ExpandedCardImage = styled.img`
    width: 50%;
    height: auto;
    margin-bottom: 2%;

    @media only screen and (max-width: 1000px) {
        width: 100%;
    }
`;