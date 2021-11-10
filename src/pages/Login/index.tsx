import styled from 'styled-components';

import { Logo } from '../../components/Logo';
import { RoundedButton } from '../../components/RoundedButton';

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

export const Login = () => (
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
            <RoundedButton text="Sign up" variant="blue" />
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
  </StyledLogin>
);
