import styled from 'styled-components';

export const JumbotronContainer = styled.div`
    justify-content: start;
    text-align: left;
    margin-bottom: 20px;
    padding-left: 15%;
    padding-right: 15%;
    margin-top: 5%;

    @media only screen and (max-width: 1000px) {
        padding-left: 5%;
        padding-right: 5%;
    }
`;

export const Title = styled.h1`
    font-size: 72px;
    font-weight: 800;
    line-heigh: 1.2;

    @media only screen and (max-width: 1000px) {
        font-size: 48px;
        font-weight: 800;
    }
`;

export const SubTextContainer = styled.div`
    margin-top: 5%;
    margin-bottom: 5%;
`;

export const SubText = styled.h6`
    font-size: 32px;
    line-height: 1.5;
    font-weight: 100;

    @media only screen and (max-width: 1000px) {
        font-size: 24px;
        font-weight: 100;
    }
`;