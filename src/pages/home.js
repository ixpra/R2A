import React from 'react';
import { Link } from 'react-router-dom';
import { HomeContainer, BackgroundVideo, Content, LargeText, TransparentButton } from '../components/Navbar/InfoSection/HomeElements';

const Home = () => {

  return (
    <HomeContainer>
      <BackgroundVideo autoPlay muted loop>
        <source src={require('../assets/valani.mp4')} type="video/mp4" />
      </BackgroundVideo>

      <Content>
        <LargeText>The Start To Your Climb</LargeText>
        <div>
          <Link to="/roadmaps">
            <TransparentButton>Roadmaps</TransparentButton>
          </Link>
          <Link to="/about">
            <TransparentButton>About R2A</TransparentButton>
          </Link>
        </div>
      </Content>
    </HomeContainer>
  );
};

export default Home;
