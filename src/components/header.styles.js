import styled from 'styled-components';

export const NavContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 20px;
    margin-right: 5%;
`;

export const ExpandedCardImage = styled.img`
    width: 50%;
    height: auto;
    margin-bottom: 2%;

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
