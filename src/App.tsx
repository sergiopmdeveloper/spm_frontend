import Header from '@/components/Header'
import Projects from '@/components/Projects'
import { Career, Studies } from '@/components/TimeContent'
import Welcome from '@/components/Welcome'

/**
 * App component
 */
export default function App() {
  return (
    <main>
      <Header />
      <Welcome />
      <Studies />
      <Career />
      <Projects />
    </main>
  )
}
