import LoadingError from '@/components/ui/LoadingError'
import Section from '@/components/ui/Section'
import SectionTitle from '@/components/ui/SectionTitle'
import Skeleton from '@/components/ui/Skeleton'
import getJobs from '@/services/getJobs'
import getStudies from '@/services/getStudies'
import { theme } from '@/styles/theme'
import formatDate from '@/utils/dates'
import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'

/**
 * Studies component
 */
export function Studies() {
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
        <TimeContentContainer>
          {query.data.map((study, index) => {
            return (
              <Content key={index}>
                <ContentContext>
                  <ContentDate>
                    {formatDate(study.start_date)} -{' '}
                    {study.end_date ? formatDate(study.end_date) : 'Present'}
                  </ContentDate>
                  <ContentName>{study.name}</ContentName>
                  <ContentOrigin>{study.school}</ContentOrigin>
                </ContentContext>
                <ContentDescription>{study.description}</ContentDescription>
                <Circle />
              </Content>
            )
          })}
        </TimeContentContainer>
      )}
    </Section>
  )
}

/**
 * Jobs component
 */
export function Jobs() {
  const query = useQuery({
    queryKey: ['jobs'],
    queryFn: getJobs,
  })

  return (
    <Section>
      <SectionTitle id="02" name="Jobs" />
      {query.isLoading && <Skeleton height="10rem" />}
      {query.error && <LoadingError height="10rem" source="studies" />}
      {query.data && (
        <TimeContentContainer>
          {query.data.map((job, index) => {
            return (
              <Content key={index}>
                <ContentContext>
                  <ContentDate>
                    {formatDate(job.start_date)} -{' '}
                    {job.end_date ? formatDate(job.end_date) : 'Present'}
                  </ContentDate>
                  <ContentName>{job.name}</ContentName>
                  <ContentOrigin>{job.company}</ContentOrigin>
                </ContentContext>
                <ContentDescription>{job.description}</ContentDescription>
                <Circle />
              </Content>
            )
          })}
        </TimeContentContainer>
      )}
    </Section>
  )
}

// Styled components
const TimeContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-left: 0.1rem solid ${theme.white};
`

const Content = styled.div`
  display: flex;
  gap: 2rem;
  padding-left: 2rem;
  position: relative;
  @media (width <= ${theme.tablet}) {
    flex-direction: column;
  }
`

const ContentContext = styled.div`
  min-width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @media (width <= ${theme.tablet}) {
    min-width: unset;
  }
`

const ContentDate = styled.time`
  color: ${theme.slate};
  font-family: ${theme.spaceMono};
  font-size: ${theme.fontSize2};
  @media (width <= ${theme.smallMobile}) {
    font-size: ${theme.fontSize1};
  }
`

const ContentName = styled.h3`
  color: ${theme.lightestSlate};
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize4};
  @media (width <= ${theme.smallMobile}) {
    font-size: ${theme.fontSize3};
  }
`

const ContentOrigin = styled.h3`
  color: ${theme.lightSlate};
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize3};
  @media (width <= ${theme.smallMobile}) {
    font-size: ${theme.fontSize2};
  }
`

const ContentDescription = styled.p`
  color: ${theme.white};
  background-color: ${theme.lightNavy};
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize3};
  padding: 1rem;
  @media (width <= ${theme.smallMobile}) {
    font-size: ${theme.fontSize2};
  }
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
