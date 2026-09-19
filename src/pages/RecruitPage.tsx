import { Recruit } from '../components/Recruit'
import { usePageTitle } from '../hooks/usePageTitle'

export function RecruitPage() {
  usePageTitle('求人採用 | 株式会社 alpha')

  return (
    <div className="page">
      <Recruit />
    </div>
  )
}
