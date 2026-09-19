import { Business } from '../components/Business'
import { Clients } from '../components/Clients'
import { usePageTitle } from '../hooks/usePageTitle'

export function BusinessPage() {
  usePageTitle('事業内容 | 株式会社 alpha')

  return (
    <div className="page">
      <Business />
      <Clients />
    </div>
  )
}
