import { theme } from '@/styles/theme'
import styled, { keyframes } from 'styled-components'

/**
 * Skeleton component
 * @param {SkeletonProps} props - The component props
 * @param {string} props.height - The height property
 */
export default function Skeleton({ height }: SkeletonProps) {
  return <SkeletonElement $height={height} />
}

// Props
type SkeletonProps = {
  height: string
}

// Styled components
const LoadingSkeleton = keyframes`
  0% {
    background-color: ${theme.lightNavy};
  }
  50% {
    background-color: ${theme.lightestNavy};
  }
  100% {
    background-color: ${theme.lightNavy};
  }
`

const SkeletonElement = styled.div<{ $height: string }>`
  width: 100%;
  height: ${props => props.$height};
  animation: ${LoadingSkeleton} 1.5s ease-in-out infinite;
`
