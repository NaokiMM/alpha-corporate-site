import { Company } from '../components/Company'
import { History } from '../components/History'
import { Philosophy } from '../components/Philosophy'
import { Values } from '../components/Values'
import { usePageTitle } from '../hooks/usePageTitle'

export function CompanyPage() {
  usePageTitle('会社情報 | 株式会社 alpha')

  return (
    <div className="page">
      <Company />
      <History />
      <Philosophy />
      <Values />
    </div>
  )
}
