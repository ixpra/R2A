import styled from 'styled-components';
import { FiArrowLeft } from 'react-icons/fi';

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

export const RoadmapContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  background-color: transparent;
  width: 50%; 
  margin: 80px 0;
  border: 1px solid #ddd;
  border-radius: 10px; 
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const BoxHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #fff; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`;

export const BoxContent = styled.p`
   font-size: 16px;
  font-weight: bold;
  color: #fff; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
`;

export const TransparentButton = styled.button`
  background-color: #000;
  border: 2px solid #fff;
  color: #fff;
  padding: 10px 20px;
  margin: 10px;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #fff;
    color: #000;
  }
`;

export const BoxLeft = styled(Box)`
  margin-left: -1000px; 
  margin-top: 100px; 
`;

export const BoxRight = styled(Box)`
  margin-right: -1050px;
  margin-top: -200px; 
`;

export const BoxBottom = styled(Box)`
  margin-top: -50px; 
`;

export const Sidebar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 610px; 
  height: 100%;
  background-color: #101522;
  box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.3);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1000;
  transition: width 0.3s; 

  p {
    font-size: 24px; 
    margin-bottom: 20px;
    color: #fff; 
  }

  a {
    text-decoration: none;
    color: #fff; 
    font-size: 14px; 
    margin-bottom: 10px;
    transition: color 0.3s; 
    &:hover {
      color: #007bff;
    }
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 30px; 
    color: #007bff; 
    margin-top: 20px;
    transition: text-decoration 0.3s; 
    &:hover {
      text-decoration: underline; 
    }
  }
`;


export const BackButton = styled(FiArrowLeft)`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: #007bff; 
  font-size: 18px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: 5px; 
  }
`;

export const SidebarText = styled.div`
  font-size: 16px;
  line-height: 1.5;
  margin-top: 20px;
  color: #fff;

  strong {
    font-weight: bold;
  }

  /* Add any other CSS styling you need here */
`;

