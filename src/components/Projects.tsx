import LoadingError from '@/components/ui/LoadingError'
import Section from '@/components/ui/Section'
import SectionTitle from '@/components/ui/SectionTitle'
import Skeleton from '@/components/ui/Skeleton'
import getProjects from '@/services/getProjects'
import { theme } from '@/styles/theme'
import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'

/**
 * Projects component
 */
export default function Projects() {
  const query = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  })

  console.log(query.data)

  return (
    <Section className="section" id="projects">
      <SectionTitle id="03" name="Projects" />
      {query.isLoading && <Skeleton height="10rem" />}
      {query.error && <LoadingError height="10rem" source="projects" />}
      <ProjectsContainer>
        {query.data?.map((project, index) => (
          <ProjectContainer key={index}>{project.name}</ProjectContainer>
        ))}
      </ProjectsContainer>
    </Section>
  )
}

const ProjectsContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  padding-bottom: 1rem;
  overflow-x: scroll;
  scrollbar-width: auto;
  scrollbar-color: ${theme.green} rgba(0, 0, 0, 0.2);
  &::-webkit-scrollbar {
    height: 0.3rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${theme.green};
  }
`

const ProjectContainer = styled.div`
  height: 20rem;
  background-color: ${theme.lightNavy};
  min-width: 35rem;
`
