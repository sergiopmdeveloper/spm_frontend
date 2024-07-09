import { Job } from '@/types/jobs'

/**
 * Gets all jobs
 * @returns {Promise<Job[]>} A promise of the jobs
 */
export default async function getJobs(): Promise<Job[]> {
  const response = await fetch(
    `${import.meta.env.VITE_SPM_BACKEND_URL}/api/jobs`
  )

  return response.json()
}
