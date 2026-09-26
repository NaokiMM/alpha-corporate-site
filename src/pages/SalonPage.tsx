import { Link } from 'react-router-dom'
import { HpbBookButton } from '../components/HpbBookButton'
import { SalonSlider } from '../components/SalonSlider'
import { usePageTitle } from '../hooks/usePageTitle'
import './SalonPage.css'

export function SalonPage() {
  usePageTitle('サロン | 株式会社 alpha')

  return (
    <div className="page salon-page">
      <SalonSlider />

      <section className="section salon" aria-labelledby="salon-heading">
        <div className="container salon__layout">
          <div className="salon__intro">
            <span className="section-label">Salon</span>
            <h1 id="salon-heading" className="section-title salon__title">
              サロン
            </h1>
            <p className="salon__name">men's salon alpha 新宿</p>
          </div>

          <div className="salon__body">
            <p>
              美しさと心地よさを大切にしたサロン空間で、
              <br />
              一人ひとりに寄り添う美容サービスを提供しています。
            </p>
            <p>東京都新宿区新宿３-14-23　新宿マヤビル ６F</p>
            <div className="salon__actions">
              <HpbBookButton
                href="https://beauty.hotpepper.jp/slnH000629134/"
                label="ホットペッパーで予約する"
              />
              <Link className="salon__staff" to="/staff">
                スタッフを見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
