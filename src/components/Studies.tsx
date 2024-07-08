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
      <div>
        <h1>Studies</h1>

        <ul>
          {query.data.map((study, index) => (
            <li key={index}>{study.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}
