import { theme } from '@/styles/theme'
import styled from 'styled-components'

/**
 * Section title component
 * @param {SectionTitleProps} props - The component props
 * @param {string} props.id - The ID of the section
 * @param {string} props.name - The name of the section
 */
export default function SectionTitle({ id, name }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      <SectionTitleNumber>{id}.</SectionTitleNumber>
      <SectionTitleText>{name}</SectionTitleText>
    </SectionTitleContainer>
  )
}

// Prop types
type SectionTitleProps = {
  id: string
  name: string
}

// Styled components
const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
`

const SectionTitleNumber = styled.span`
  color: ${theme.green};
  font-family: ${theme.spaceMono};
  font-size: ${theme.fontSize6};
`

const SectionTitleText = styled.h2`
  color: ${theme.white};
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize6};
`
