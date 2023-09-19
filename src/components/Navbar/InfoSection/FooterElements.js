import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 2rem 0;
  text-align: center;
`;

export const FooterText = styled.p`
  font-size: 18px;
  margin-bottom: 1rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 1rem;
`;

export const SocialLink = styled.a`
text-decoration: none;
color: #fff;
font-size: 24px;
transition: color 0.3s ease;

&:hover {
  color: #15cdfc; /* Change the color on hover */
}
`;
