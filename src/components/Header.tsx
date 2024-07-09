import { theme } from '@/styles/theme'
import styled from 'styled-components'

/**
 * Header component
 */
export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderLinks>
          <HeaderLink>Studies</HeaderLink>
          <HeaderLink>Jobs</HeaderLink>
          <HeaderLink>Projects</HeaderLink>
          <HeaderLink>Contact</HeaderLink>
        </HeaderLinks>
      </HeaderContent>
    </HeaderContainer>
  )
}

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
`

const HeaderLink = styled.li`
  list-style: none;
  color: ${theme.white};
  font-family: ${theme.spaceMono};
  font-size: ${theme.fontSize2};
`
