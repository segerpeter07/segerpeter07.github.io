import React, {useState} from 'react';
import { 
    Nav,
    NavItem,
    NavLink,
    Modal,
    ModalBody,
    ModalHeader,
} from "shards-react";
import { NavContainer, ExpandedCardImage, ContentScollBox } from './header.styles';

const Header = (props) => {
    const [modalState, setModalState] = useState(false);

    return(
        <React.Fragment>
            <NavContainer>
                <Nav>
                    <NavItem>
                        <NavLink href="#projects">
                            Projects
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" onClick={() => setModalState(!modalState)}>
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#footer">
                            Contact
                        </NavLink>
                    </NavItem>
                </Nav>
            </NavContainer>
            <Modal size="lg" open={modalState} toggle={() => setModalState(!modalState)}>
                <ModalHeader>About me</ModalHeader>
                <ContentScollBox>
                    <ModalBody>
                        <ExpandedCardImage src={require('../images/about_me.jpg')} />
                        <p>I'm a full-stack developer and desiger who has worked on a myriad of projects ranging from embedded systems, visualization systems, to machine learning. I have worked on small scale projects all the way to large, distributed systems capable of handling thousands of queries per second. Experienced in frontend and backend services for projects at scale.</p>
                        <p>In my free time, I love to travel, take photographs, and read. Born and raised primarly in Portland, Oregon, I've lived in Boston, San Francsisco, Amsterdam, Oxford, England, and Gothenburg, Sweden. I'm lucky enough to have tripple citizenship (Swedish, Canadian, & U.S.).</p>
                    </ModalBody>
                </ContentScollBox>
            </Modal>
        </React.Fragment>
    )
}

export default Header;