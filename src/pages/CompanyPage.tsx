import { Company } from '../components/Company'
import { History } from '../components/History'
import { Philosophy } from '../components/Philosophy'
import { PhilosophyMap } from '../components/PhilosophyMap'
import { Values } from '../components/Values'
import { usePageTitle } from '../hooks/usePageTitle'

export function CompanyPage() {
  usePageTitle('会社情報 | 株式会社 alpha')

  return (
    <div className="page company-page">
      <header className="company-page__intro">
        <div className="container">
          <span className="section-label">Company</span>
          <h1 id="company-heading" className="company-page__title">
            会社情報
          </h1>
        </div>
      </header>
      <Philosophy />
      <Values />
      <PhilosophyMap />
      <Company />
      <History />
    </div>
  )
}
