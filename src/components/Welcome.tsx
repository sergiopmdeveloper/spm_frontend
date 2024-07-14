import { theme } from '@/styles/theme'
import { useGSAP } from '@gsap/react'
import { FilePerson, Github } from '@styled-icons/bootstrap'
import { gsap } from 'gsap'
import styled from 'styled-components'

/**
 * Welcome component
 */
export default function Welcome() {
  useGSAP(() => {
    gsap.from('.welcome-title', {
      opacity: 0,
      y: -75,
      duration: 1,
      delay: 0.3,
      ease: 'power2.out',
    })

    gsap.from('.welcome-description', {
      opacity: 0,
      y: -75,
      duration: 1,
      delay: 0.4,
      ease: 'power2.out',
    })

    gsap.from('.welcome-buttons', {
      opacity: 0,
      y: -75,
      duration: 1,
      delay: 0.5,
      ease: 'power2.out',
    })
  }, {})

  return (
    <WelcomeContainer>
      <WelcomeContent>
        <WelcomeTitle className="welcome-title">
          I'm Sergio Peña and I'm a full stack developer
        </WelcomeTitle>
        <WelcomeDescription className="welcome-description">
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
        <WelcomeButtonsContainer className="welcome-buttons">
          <a href="https://github.com/sergiopmdeveloper" target="_blank">
            <WelcomeButton>
              GitHub
              <GithubIcon />
            </WelcomeButton>
          </a>
          <a href="/resume.pdf" download>
            <WelcomeButton>
              Resume
              <ResumeIcon />
            </WelcomeButton>
          </a>
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
  box-sizing: border-box;
  padding: 0 2rem;
  @media (width <= ${theme.tablet}) {
    align-items: flex-start;
    margin-top: 3rem;
  }
  @media (width <= ${theme.largeMobile}) {
    padding: 0 1.5rem;
  }
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
  @media (width <= ${theme.smallLaptop}) {
    font-size: ${theme.fontSize10};
  }
  @media (width <= ${theme.tablet}) {
    text-align: left;
  }
  @media (width <= ${theme.largeMobile}) {
    font-size: ${theme.fontSize8};
  }
  @media (width <= ${theme.smallMobile}) {
    font-size: ${theme.fontSize7};
  }
`

const WelcomeDescription = styled.p`
  text-align: center;
  font-size: ${theme.fontSize4};
  font-family: ${theme.roboto};
  color: ${theme.slate};
  @media (width <= ${theme.smallLaptop}) {
    font-size: ${theme.fontSize3};
  }
  @media (width <= ${theme.tablet}) {
    text-align: left;
  }
  @media (width <= ${theme.largeMobile}) {
    font-size: ${theme.fontSize2};
  }
`

const WelcomeHighlighted = styled.span`
  color: ${theme.green};
  font-weight: 700;
`

const WelcomeButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  @media (width <= ${theme.tablet}) {
    width: 100%;
    flex-direction: column;
  }
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
  @media (width <= ${theme.smallLaptop}) {
    font-size: ${theme.fontSize3};
  }
  @media (width <= ${theme.tablet}) {
    width: 100%;
    justify-content: center;
  }
  @media (width <= ${theme.smallMobile}) {
    font-size: ${theme.fontSize2};
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
