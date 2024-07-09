import useActiveSection from '@/hooks/useActiveSection'
import { theme } from '@/styles/theme'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import styled from 'styled-components'

/**
 * Header component
 */
export default function Header() {
  const activeSection = useActiveSection()

  useGSAP(() => {
    gsap.from('.header-content', {
      y: -100,
      duration: 1,
      ease: 'power2.out',
    })
  }, {})

  return (
    <HeaderContainer>
      <HeaderContent className="header-content">
        <HeaderLinks>
          <HeaderLink $active={activeSection.includes('studies')}>
            <a href="#studies">Studies</a>
          </HeaderLink>
          <HeaderLink $active={activeSection.includes('career')}>
            <a href="#career">Career</a>
          </HeaderLink>
          <HeaderLink $active={activeSection.includes('projects')}>
            Projects
          </HeaderLink>
          <HeaderLink $active={activeSection.includes('contact')}>
            Contact
          </HeaderLink>
        </HeaderLinks>
      </HeaderContent>
    </HeaderContainer>
  )
}

// Styled components
const HeaderContainer = styled.div`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  z-index: 9;
  top: 0;
`

const HeaderContent = styled.header`
  backdrop-filter: blur(10px);
  background-color: ${theme.lightestNavy}80;
  padding: 0.8rem 1.2rem;
  border-radius: 1rem;
`

const HeaderLinks = styled.ul`
  display: flex;
  gap: 1.5rem;
  padding: 0;
  margin: 0;
  @media (width <= ${theme.largeMobile}) {
    gap: 0.8rem;
  }
`

const HeaderLink = styled.li<{ $active: boolean }>`
  list-style: none;
  color: ${props => (props.$active ? theme.green : theme.white)};
  font-family: ${theme.spaceMono};
  font-size: ${theme.fontSize2};
  cursor: pointer;
  &:hover {
    color: ${theme.green};
  }
  @media (width <= ${theme.largeMobile}) {
    font-size: ${theme.fontSize1};
  }
`
