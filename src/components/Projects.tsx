import Section from '@/components/ui/Section'
import SectionTitle from '@/components/ui/SectionTitle'
import getProjects from '@/services/getProjects'
import { useQuery } from '@tanstack/react-query'

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
    </Section>
  )
}
