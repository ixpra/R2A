import React from 'react';
import { AboutContainer, Box, BoxHeader, BoxContent, BackgroundVideo } from '../components/Navbar/InfoSection/AboutElements';

const About = () => {
  return (
    
    <AboutContainer>
      <BackgroundVideo autoPlay muted loop>
        <source src={require('../assets/ValorantWallpaper.mp4')} type="video/mp4" />
      </BackgroundVideo>
      <Box>
        <BoxHeader>About R2A</BoxHeader>
        <BoxContent>
        "Road 2 Ascendant" is a website dedicated to helping Valorant players progress through the ranks, from Iron to Ascendant. Developed by an experienced ex-Immortal player, it offers valuable tips, strategies, and guidance to enhance gameplay and climb the competitive ladder. Whether you're a novice or a seasoned player, "Road 2 Ascendant" is your go-to resource for improving your skills and reaching the highest ranks in Valorant.
        </BoxContent>
      </Box>
      <Box>
        <BoxHeader>About Me</BoxHeader>
        <BoxContent>
        I am 17 years old, soon to turn 18 at the time this was made with a strong interest in the world of technology. Currently, I'm pursuing a major in Information Science along with a minor in Computer Science. As of now, I'm a student at UMBC, where I'm furthering my education and expanding my horizons in the field of computing. I am excited about the endless possibilities that lie ahead in my future!
        </BoxContent>
      </Box>
    </AboutContainer>
  );
};

export default About;
