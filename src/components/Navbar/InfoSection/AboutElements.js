import styled from 'styled-components';

export const AboutContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
`;

export const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  background: rgba(0, 0, 0, 0.5); 
`;

export const Box = styled.div`
  background-color: transparent;
  width: 50%; 
  margin: 80px 0; 
  border: 1px solid #ddd;
  border-radius: 50px;
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const BoxHeader = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #fff; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`;

export const BoxContent = styled.p`
  font-size: 22px;
  font-weight: bold;
  color: #fff; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`;
