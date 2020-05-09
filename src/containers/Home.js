import React from 'react';
import {AppContainer, WorkContainer, WorkRow} from './Home.styles';
import Header from '../components/header';
import Jumbotron from '../components/jumbotron';
import Footer from '../components/footer';
import WorkCard from '../components/workCard';
import { projectsData } from '../data/projectsData';

const Home = () => {
  const renderProjects = () => {
    return projectsData.map((project, index) => (
      <WorkCard data={project} key={index} />
    ))
  }

  return (
    <AppContainer>
        <Header
          currActive={"c2"}
        />
        <Jumbotron />
        <WorkContainer id="projects">
          {renderProjects()}
          {/* <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard /> */}
        </WorkContainer>
        <Footer />
    </AppContainer>
  );
}

export default Home;
