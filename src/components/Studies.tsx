import Section from '@/components/ui/Section'
import SectionTitle from '@/components/ui/SectionTitle'
import getStudies from '@/services/getStudies'
import { useQuery } from '@tanstack/react-query'

/**
 * Studies component
 */
export default function Studies() {
  const query = useQuery({
    queryKey: ['studies'],
    queryFn: getStudies,
  })

  if (query.isLoading) {
    return <div>Loading...</div>
  }

  if (query.isError) {
    return <div>Error loading the studies</div>
  }

  if (query.data) {
    return (
      <Section>
        <SectionTitle id="01" name="Studies" />
      </Section>
    )
  }
}
