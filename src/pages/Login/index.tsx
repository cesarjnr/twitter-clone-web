import styled from 'styled-components';
import { Outlet } from "react-router-dom";

import { Logo } from '../../components/Logo';
import { RoundedButton } from '../../components/RoundedButton';

interface FooterNavLink {
  url: string;
  label: string;
};

const StyledLogin = styled.div`
  background-color: rgb(0, 0, 0);
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const HeaderMainContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
`;
const Header = styled.header`
  flex-basis: 0;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 36px;
  color: rgba(217, 217, 217, 1);
  font-family: TwitterChirpExtendedHeavy, Verdana, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;
const LogoContainer = styled.div`
  align-self: flex-start;
`;
const Title = styled.h1`
  font-size: 64px;
  margin: 48px 0;
`;
const Subtitle = styled.h2`
  font-size: 31px;
  margin-bottom: 32px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  max-width: 380px;
`;
const Main = styled.main`
  flex-basis: 0;
  flex-grow: 1.3;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${process.env.PUBLIC_URL + '/login_background.png'});
  background-size: cover;
  background-position: center center;
`;
const Footer = styled.footer`
  padding: 12px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterText = styled.a`
  margin: 4px 0;
  padding-right: 16px;
  color: rgb(110, 118, 125);
  font-size: 13px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
`;
const FooterLinkText = styled(FooterText)`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Login = () => {
  const footerNavLinks: FooterNavLink[] = [
    { url: '#', label: 'About' },
    { url: '#', label: 'Help Center' },
    { url: '#', label: 'Terms of Service' },
    { url: '#', label: 'Privacy Policy' },
    { url: '#', label: 'Cookie Policy' },
    { url: '#', label: 'Ads info' },
    { url: '#', label: 'Blog' },
    { url: '#', label: 'Status' },
    { url: '#', label: 'Careers' },
    { url: '#', label: 'Brand Resources' },
    { url: '#', label: 'Advertising' },
    { url: '#', label: 'Marketing' },
    { url: '#', label: 'Twitter for Business' },
    { url: '#', label: 'Developers' },
    { url: '#', label: 'Directory' },
    { url: '#', label: 'Settings' }
  ];

  return (
    <StyledLogin>
      <HeaderMainContainer>
        <Header>
          <LogoContainer>
            <Logo height="3rem" color="rgb(217, 217, 217)" />
          </LogoContainer>
          
          <Title>Happening now</Title>
          <Subtitle>Join Twitter today.</Subtitle>

          <ButtonsContainer>
            <ButtonContainer>
              <RoundedButton text="Sign up" variant="blue" to="i/flow/signup" />
            </ButtonContainer>
            <ButtonContainer>
              <RoundedButton text="Log in" variant="black" />
            </ButtonContainer>
          </ButtonsContainer>
        </Header>

        <Main>
          <Logo height="380px" color="rgb(255, 255, 255)" />
        </Main>
      </HeaderMainContainer>

      <Footer>
        <nav>
          {footerNavLinks.map(link => (
            <FooterLinkText key={link.label} href={link.url}>
              {link.label}
            </FooterLinkText>
          ))}

          <FooterText>&copy; 2021 Twitter, Inc.</FooterText>
        </nav>
      </Footer>

      <Outlet />
    </StyledLogin>
  );
};
