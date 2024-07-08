import Section from '@/components/ui/Section'
import SectionTitle from '@/components/ui/SectionTitle'
import Skeleton from '@/components/ui/Skeleton'
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

  return (
    <Section>
      <SectionTitle id="01" name="Studies" />
      {query.isLoading && <Skeleton height="10rem" />}
    </Section>
  )
}
