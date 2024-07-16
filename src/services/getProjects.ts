import { Project } from '@/types/projects'

/**
 * Gets all projects
 * @returns {Promise<Project[]>} A promise of the projects
 */
export default async function getProjects(): Promise<Project[]> {
  const response = await fetch(
    `${import.meta.env.VITE_SPM_BACKEND_URL}/api/projects`
  )

  return response.json()
}
