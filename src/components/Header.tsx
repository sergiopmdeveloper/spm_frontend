import { theme } from '@/styles/theme'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

/**
 * Header component
 */
export default function Header() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('#section')

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.className)
        }
      })
    }, options)

    sections.forEach(section => {
      observer.observe(section)
    })

    return () => {
      sections.forEach(section => {
        observer.unobserve(section)
      })
    }
  }, [])

  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLinks>
          <HeaderLink $active={activeSection.includes('studies')}>
            Studies
          </HeaderLink>
          <HeaderLink $active={activeSection.includes('career')}>
            Career
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
