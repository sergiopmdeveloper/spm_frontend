import LoadingError from '@/components/ui/LoadingError'
import Section from '@/components/ui/Section'
import SectionTitle from '@/components/ui/SectionTitle'
import Skeleton from '@/components/ui/Skeleton'
import getStudies from '@/services/getStudies'
import { theme } from '@/styles/theme'
import formatDate from '@/utils/dates'
import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'

/**
 * Studies component
 */
export default function Studies() {
  const query = useQuery({
    queryKey: ['studies'],
    queryFn: getStudies,
  })

  return (
    <Section>
      <SectionTitle id="01" name="Studies" />
      {query.isLoading && <Skeleton height="10rem" />}
      {query.error && <LoadingError height="10rem" source="studies" />}
      {query.data && (
        <StudiesContainer>
          {query.data.map((study, index) => {
            return (
              <StudyContainer key={index}>
                <StudyContext>
                  <StudyDate>
                    {formatDate(study.start_date)} -{' '}
                    {study.end_date ? formatDate(study.end_date) : 'Present'}
                  </StudyDate>
                  <StudyName>{study.name}</StudyName>
                  <StudySchool>{study.school}</StudySchool>
                </StudyContext>
                <StudyDescription>{study.description}</StudyDescription>
                <Circle />
              </StudyContainer>
            )
          })}
        </StudiesContainer>
      )}
    </Section>
  )
}

// Styled components
const StudiesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-left: 0.1rem solid ${theme.white};
`

const StudyContainer = styled.div`
  display: flex;
  gap: 2rem;
  padding-left: 2rem;
  position: relative;
`

const StudyContext = styled.div`
  min-width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const StudyDate = styled.time`
  color: ${theme.slate};
  font-family: ${theme.spaceMono};
  font-size: ${theme.fontSize2};
`

const StudyName = styled.h3`
  color: ${theme.lightestSlate};
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize4};
`

const StudySchool = styled.h3`
  color: ${theme.lightSlate};
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize3};
`

const StudyDescription = styled.p`
  color: ${theme.white};
  background-color: ${theme.lightNavy};
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize3};
  padding: 1rem;
`

const Circle = styled.div`
  width: 1rem;
  height: 1rem;
  background-color: ${theme.green};
  border-radius: 50%;
  position: absolute;
  top: 2.5rem;
  left: -0.5rem;
`
