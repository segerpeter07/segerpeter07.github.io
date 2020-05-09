import React from 'react';
import {JumbotronContainer, Title, SubText, SubTextContainer} from './jumbotron.styles';
import { Button } from "shards-react";
import resume from '../media/Peter_Seger_Resume.pdf'

const Jumbotron = (props) => {
    return(
        <JumbotronContainer>
            <Title>Hello, I'm Peter!</Title>
            <br></br>
            <Title>I build user-first products.</Title>
            <SubTextContainer>
                <SubText>My name is Peter Seger, I'm a full-stack developer and designer with 3+ years of experience. I specialze in Web and Mobile projects.</SubText>
            </SubTextContainer>
            <Button pill size='lg' href={resume} target='_blank' rel='noopener noreferrer'>Check my resume</Button>
        </JumbotronContainer>
    )
}

export default Jumbotron;