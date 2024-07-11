import { theme } from '@/styles/theme'
import { FilePerson, Github } from '@styled-icons/bootstrap'
import styled from 'styled-components'

/**
 * Welcome component
 */
export default function Welcome() {
  return (
    <WelcomeContainer>
      <WelcomeContent>
        <WelcomeTitle>
          I'm Sergio Peña and I'm a full stack developer
        </WelcomeTitle>
        <WelcomeDescription>
          Hi! I'm Sergio Peña and I'm a{' '}
          <WelcomeHighlighted>full stack developer</WelcomeHighlighted>. Welcome
          to my portfolio where you will find everything you need to know about
          me professionally. Software development is my{' '}
          <WelcomeHighlighted>profession</WelcomeHighlighted> and my{' '}
          <WelcomeHighlighted>passion</WelcomeHighlighted>. Backend, frontend,
          machine learning, scripting, automation, open source... Everything
          that has to do with coding is welcome.{' '}
          <WelcomeHighlighted>Let's work together?</WelcomeHighlighted>
        </WelcomeDescription>
        <WelcomeButtonsContainer>
          <WelcomeButton>
            GitHub
            <GithubIcon />
          </WelcomeButton>
          <WelcomeButton>
            Resume
            <ResumeIcon />
          </WelcomeButton>
        </WelcomeButtonsContainer>
      </WelcomeContent>
    </WelcomeContainer>
  )
}

const WelcomeContainer = styled.div`
  width: 100%;
  height: calc(100vh - 5rem);
  display: flex;
  align-items: center;
  justify-content: center;
`

const WelcomeContent = styled.div`
  width: 70rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`

const WelcomeTitle = styled.h1`
  text-align: center;
  font-size: ${theme.fontSize11};
  font-family: ${theme.roboto};
  font-weight: 900;
  background: linear-gradient(to right, ${theme.slate}, ${theme.white});
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: ${theme.white};
  line-height: 1;
`

const WelcomeDescription = styled.p`
  text-align: center;
  font-size: ${theme.fontSize4};
  font-family: ${theme.roboto};
  color: ${theme.slate};
`

const WelcomeHighlighted = styled.span`
  color: ${theme.green};
  font-weight: 700;
`

const WelcomeButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
`

const WelcomeButton = styled.button`
  display: flex;
  align-items: center;
  font-size: ${theme.fontSize4};
  font-family: ${theme.spaceMono};
  background-color: ${theme.lightestNavy};
  color: ${theme.white};
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  transition:
    color 0.3s,
    filter 0.3s;
  &:hover {
    color: ${theme.green};
    filter: brightness(0.9);
    transition:
      color 0.3s,
      filter 0.3s;
  }
`

const ResumeIcon = styled(FilePerson)`
  width: 1.2rem;
  margin-left: 0.5rem;
`

const GithubIcon = styled(Github)`
  width: 1.2rem;
  margin-left: 0.5rem;
`
