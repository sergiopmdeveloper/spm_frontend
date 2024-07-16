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

  return (
    <Section className="section" id="projects">
      <SectionTitle id="03" name="Projects" />
      {query.isLoading && <Skeleton height="10rem" />}
      {query.error && <LoadingError height="10rem" source="projects" />}
      <ProjectsContainer>
        {query.data?.map((project, index) => (
          <ProjectContainer key={index}>
            <ProjectTitle>{project.name}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
            <a href={project.link} target="_blank">
              <ProjectButton>Project</ProjectButton>
            </a>
          </ProjectContainer>
        ))}
        {query.data && (
          <a
            href="https://github.com/sergiopmdeveloper?tab=repositories"
            target="_blank"
          >
            <SeeMore>See more</SeeMore>
          </a>
        )}
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
  min-width: 30rem;
  height: 14rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.lightNavy};
  box-sizing: border-box;
  padding: 1rem;
`

const ProjectTitle = styled.h2`
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize5};
  color: ${theme.white};
`

const ProjectDescription = styled.p`
  font-family: ${theme.roboto};
  font-size: ${theme.fontSize4};
  color: ${theme.slate};
`

const ProjectButton = styled.button`
  width: fit-content;
  font-family: ${theme.spaceMono};
  font-size: ${theme.fontSize3};
  background-color: ${theme.lightestNavy};
  color: ${theme.white};
  padding: 0.5rem 1rem;
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
`

const SeeMore = styled.button`
  height: 14rem;
  font-family: ${theme.spaceMono};
  font-size: ${theme.fontSize4};
  background-color: ${theme.lightestNavy};
  color: ${theme.white};
  padding: 0 1rem;
  border-radius: 0.5rem;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transform: rotate(180deg);
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
`
