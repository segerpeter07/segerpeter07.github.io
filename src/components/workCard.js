import React, {useState} from 'react';
import {
    Card,
    CardTitle,
    CardImg,
    CardBody,
    Button,
    Modal,
    ModalBody,
    ModalHeader
  } from "shards-react";
import { CardContainer, ExpandedCardImage, ContentScollBox } from './workCard.styles';

const WorkCard = (props) => {
    const [modalState, setModalState] = useState(false);
    const {title, modalTitle, blurb, iconPhoto, coverPhoto, bodyParagraphs} = props.data;
    console.log(bodyParagraphs);

    const renderBodyParagraphs = bodyParagraphs.map((text, index) => (
        <p key={index}>{text}</p>
    ))

    return(
        <React.Fragment>
            <CardContainer>
                <Card>
                    {/* <CardHeader /> */}
                    <CardImg src={require(`../images/${iconPhoto}`)}  style={{borderTopLeftRadius: '0.625rem', borderTopRightRadius:'0.625rem', width:'100%', height:'auto', minHeight:'200px', maxHeight:'200px', objectFit:'cover'}}/>
                    <CardBody>
                        <CardTitle>{title}</CardTitle>
                        <p>{blurb}</p>
                        <Button onClick={() => setModalState(!modalState)}>Read more &rarr;</Button>
                    </CardBody>
                    {/* <CardFooter /> */}
                </Card>
            </CardContainer>
            <Modal size="lg" open={modalState} toggle={() => setModalState(!modalState)}>
                <ModalHeader>{modalTitle}</ModalHeader>
                <ContentScollBox>
                    <ModalBody>
                        <ExpandedCardImage src={require(`../images/${coverPhoto}`)} />
                        {renderBodyParagraphs}
                    </ModalBody>
                </ContentScollBox>
            </Modal>
        </React.Fragment>
    )
}

export default WorkCard;