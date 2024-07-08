import { theme } from '@/styles/theme'
import styled from 'styled-components'

/**
 * Section component
 */
const Section = styled.div`
  max-width: ${theme.laptop};
  margin: 0rem auto 8rem auto;
  padding: 0 2rem;
  @media (width <= ${theme.largeMobile}) {
    padding: 0 1.5rem;
  }
`

export default Section
