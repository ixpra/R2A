import React, { useState } from 'react';
import { RoadmapContainer, BackgroundVideo, BoxContent, BoxHeader, TransparentButton, BoxBottom, BoxLeft, BoxRight, Sidebar, BackButton, SidebarText} from '../components/Navbar/InfoSection/RoadmapElements';

const Roadmap = () => {
  const [showRecruitMenu, setShowRecruitMenu] = useState(false);
  const [showRecruitSubMenu, setShowRecruitSubMenu] = useState(false);
  const [showAdvancedMenu, setShowAdvancedMenu] = useState(false); 
  const [showAdvancedSubMenu, setShowAdvancedSubMenu] = useState(false); 
  const [showPrestigeMenu, setShowPrestigeMenu] = useState(false); 
  const [showPrestigeSubMenu, setShowPrestigeSubMenu] = useState(false); 

  const toggleRecruitMenu = () => {
    setShowRecruitMenu(!showRecruitMenu);
    setShowRecruitSubMenu(false);
    setShowAdvancedMenu(false); 
    setShowPrestigeMenu(false); 
  };

  const toggleRecruitSubMenu = () => {
    setShowRecruitSubMenu(!showRecruitSubMenu);
  };

  const toggleAdvancedMenu = () => {
    setShowAdvancedMenu(!showAdvancedMenu);
    setShowRecruitMenu(false); 
    setShowPrestigeMenu(false);
  };

  const toggleAdvancedSubMenu = () => {
    setShowAdvancedSubMenu(!showAdvancedSubMenu);
  };

  const togglePrestigeMenu = () => {
    setShowPrestigeMenu(!showPrestigeMenu);
    setShowRecruitMenu(false); 
    setShowAdvancedMenu(false);
  };

  const togglePrestigeSubMenu = () => {
    setShowPrestigeSubMenu(!showPrestigeSubMenu);
  };

  const goBack = () => {
    setShowRecruitMenu(false);
    setShowRecruitSubMenu(false);
    setShowAdvancedMenu(false); 
    setShowAdvancedSubMenu(false); 
    setShowPrestigeMenu(false);
    setShowPrestigeSubMenu(false); 
  };

  const goBackToAdvancedMenu = () => {
    setShowAdvancedSubMenu(false);
  };

  const goBackToPrestigeMenu = () => {
    setShowPrestigeSubMenu(false);
  };
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <BackgroundVideo autoPlay muted loop>
        <source src={require('../assets/vallogo.mp4')} type="video/mp4" />
      </BackgroundVideo>

      <RoadmapContainer>
  <BoxLeft>
    <BoxHeader> Recruit (Iron to Silver) </BoxHeader>
    <BoxContent>
      This is the Recruit Roadmap. Get ready to hone your skills.
    </BoxContent>
    <TransparentButton onClick={toggleRecruitMenu}>Get Started</TransparentButton>

    {showRecruitMenu && (
      <Sidebar>
        <BackButton onClick={goBack}></BackButton>
        <p>Welcome to the Recruit Roadmap, designed to help you elevate your Valorant gameplay from Iron to Silver. Whether you're new to the game or looking to refine your skills, this roadmap is your gateway to mastering the fundamentals. This will be the most content-heavy roadmap; however, these are crucial to your experience! This Section will cover...</p>
        <TransparentButton onClick={toggleRecruitSubMenu}>• Peripherals</TransparentButton>
        <TransparentButton onClick={toggleRecruitSubMenu}>• Settings</TransparentButton>
        <TransparentButton onClick={toggleRecruitSubMenu}>• Fundamentals</TransparentButton>
        <TransparentButton onClick={toggleRecruitSubMenu}>• Communication</TransparentButton>
        <TransparentButton onClick={toggleRecruitSubMenu}>• Hours</TransparentButton>
      </Sidebar>
    )}

    {showRecruitSubMenu && (
      <Sidebar>
        <BackButton onClick={goBack}>Back</BackButton>
        <SidebarText>
      <strong>Peripherals:</strong> Embark on your journey to by optimizing your gaming setup. This section covers the importance of selecting the right gaming peripherals, such as mice, keyboards, and monitors, to enhance your gameplay. Learn how the right equipment can give you an edge and improve your overall gaming experience.
      <br />
      <br />
      <strong>YouTube Video:</strong> <a href="https://youtu.be/eLgeDpMiEIQ?si=pyNuUzahdK2a-9Bz" target="_blank" rel="noopener noreferrer">Watch Here</a>
      <br />
      <br />
      <strong>Settings:</strong> Achieving success in Valorant starts with the right in-game settings. Explore this section to fine-tune your graphics, sensitivity, and keybinds for maximum comfort and precision. Understand how your settings impact your gameplay and make adjustments to suit your playstyle. This is something that youd want to figure out for you.
      <br />
      <br />
      <strong>Fundamentals:</strong> Strong fundamentals are the foundation of any skilled Valorant player. Dive into this section to master the basic mechanics, such as movement, crosshair placement, and peeking. Build a solid foundation of gameplay skills that will serve you well as you progress through the ranks.
      <br />
      <br />
      <strong>YouTube Video:</strong> <a href="https://www.youtube.com/watch?v=-ajRzlu4iJA" target="_blank" rel="noopener noreferrer">Watch Here</a>
      <br />
      <br />
      <strong>Communication:</strong> Effective communication is key to success in team-based games. Learn the basics of in-game communication, including callouts, map awareness, and teamwork. Discover how to work cohesively with your team, provide valuable information, and contribute to a coordinated effort.
      <br />
      <br />
      <strong>Hours:</strong> Becoming a skilled player in Valorant requires practice and dedication. Understanding everything improves with time and that you will improve regardless is crucial. Everything Good Takes Time. Review your gameplay, and learn how to set goals for continuous improvement.
  
      
    </SidebarText>
      </Sidebar>
    )}
  </BoxLeft>

  <BoxRight>
    <BoxHeader> Advanced (Gold to Platinum) </BoxHeader>
    <BoxContent>
      This is the Advanced Roadmap. Are you able to take your gameplay to the next step?
    </BoxContent>
    <TransparentButton onClick={toggleAdvancedMenu}>Get Started</TransparentButton>

    {showAdvancedMenu && (
      <Sidebar>
        <BackButton onClick={goBack}></BackButton>
        <p>Welcome to the Advanced Roadmap, designed to help you reach the Gold to Platinum rank. In this roadmap, you'll focus on refining your gameplay to become a top-tier player. It's time to step up your game and compete at a higher level! This Section will cover...</p>
        <TransparentButton onClick={toggleAdvancedSubMenu}>• Map Knowledge</TransparentButton>
        <TransparentButton onClick={toggleAdvancedSubMenu}>• Positioning</TransparentButton>
        <TransparentButton onClick={toggleAdvancedSubMenu}>• Strategies</TransparentButton>
      </Sidebar>
    )}

    {showAdvancedSubMenu && (
      <Sidebar>
        <BackButton onClick={goBackToAdvancedMenu}>Back</BackButton>
        <SidebarText>
      <strong>Map Knowledge / Game Sense:</strong>  To ascend to the higher, more advanced ranks, you must master the maps in Valorant and have Game Sense. Dive into this section to gain a deep understanding of the layout, callouts, and common strategies for each map. To evolve and improve on this aspect, you can use customs, but to truly learn the maps and how they play; you just need to play more. If you have gotten this far, it will only improve.
      <br />
      <br />
      <strong>Positoning:</strong> Perfecting your positioning is a critical step toward achieving a higher rank. Explore this section to grasp the importance of positioning in Valorant. Learn how to choose the right angles, cover, and positions to maximize your impact while minimizing risk. Elevate your gameplay by making smarter positioning decisions. 
      <br />
      <br />
      <strong>YouTube Video:</strong>  <a href="https://youtu.be/q5ZYUnfQVok?si=R6JPs_K20j93hQRW" target="_blank" rel="noopener noreferrer">Watch Here</a> 
      <br />
      <br />
      <strong>Aim Training:</strong> Refining your aiming skills is a crucial step in climbing the ranks in general, regardless if you are Radiant. In this section, we will discover how to train your aim effectively, practice headshots, and win crucial duels in high-stress situations.
      <br />
      <br />
      <strong>YouTube Video:</strong>  <a href="https://youtu.be/vQY1Vc9td_s?si=a9I7n1CnsH7orsZ9" target="_blank" rel="noopener noreferrer">Watch Here</a> 
    </SidebarText>
      </Sidebar>
    )}
  </BoxRight>

  <BoxBottom>
    <BoxHeader> Prestige (Diamond to Ascendant) </BoxHeader>
    <BoxContent>
      This is the Prestige Roadmap. Entering the top 3.5% of players, will you be able to survive?
    </BoxContent>
    <TransparentButton onClick={togglePrestigeMenu}>Get Started</TransparentButton>

    {showPrestigeMenu && (
      <Sidebar>
        <BackButton onClick={goBack}></BackButton>
        <p>Welcome to the Prestige Roadmap, your journey to reaching the highest ranks in Valorant, Diamond to Ascendant. Here, you'll learn what it takes to compete at the top level and stand out among the best players in the game. Are you up for the challenge? This Section will cover...</p>
        <TransparentButton onClick={togglePrestigeSubMenu}>• Meta Knowledge</TransparentButton>
        <TransparentButton onClick={togglePrestigeSubMenu}>• Teamplay</TransparentButton>
        <TransparentButton onClick={togglePrestigeSubMenu}>• Consistency</TransparentButton>
      </Sidebar>
    )}

{showPrestigeSubMenu && (
  <Sidebar>
    <BackButton onClick={goBackToPrestigeMenu}>Back</BackButton>
    <SidebarText>
      <strong>Meta Knowledge:</strong> In this section, we delve deep into the ever-evolving meta of the game. Learn about the latest agent compositions, weapon choices, and strategic trends that define the highest levels of play. Adapt and thrive in the dynamic world of Valorant's competitive scene. Watching Pro Players, keeping up with patch notes, and getting into higher ranks will keep you up to date with the meta.
      <br />
      <br />
      <strong>Talent:</strong> In this section, we go into the innate skills and abilities that can give you an advantage in Valorant. How impotant harnessing your reflexes, game sense, and innate talent to elevate your gameplay to the Ascendant level+ really is. Discovering how to capitalize on your inherent gaming prowess and previous backgrounds will give you a major advantage.
      <br />
      <br />
      <strong>Consistency:</strong> Finally, consistency is the mark of a high level player. Learning how to maintain peak performance match after match is CRUCIAL. Even if it means limiting yourself to two games a day to avoid burnout, exploring techniques for aim training, mental fortitude, and staying in the flow zone is what a player of high caliber does. Elevate your gameplay to become a player who consistently makes a difference in your team's success.
      <br />
      <br />
    </SidebarText>
  </Sidebar>
)}
  
  </BoxBottom>
</RoadmapContainer>

    </div>
  );
};

export default Roadmap;
