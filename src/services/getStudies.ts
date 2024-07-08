import { Study } from '@/types/studies'

/**
 * Gets all studies
 * @returns {Promise<Study[]>} A promise of the studies
 */
export default async function getStudies(): Promise<Study[]> {
  const response = await fetch(
    `${import.meta.env.VITE_SPM_BACKEND_URL}/api/studies`
  )

  return response.json()
}
