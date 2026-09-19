import { Staff } from '../components/Staff'
import { usePageTitle } from '../hooks/usePageTitle'

export function StaffPage() {
  usePageTitle('スタッフ | 株式会社 alpha')

  return (
    <div className="page">
      <Staff />
    </div>
  )
}
