import type { BusinessItem } from '../types/business'
import './Business.css'

const BUSINESS_ITEMS: BusinessItem[] = [
  {
    id: 'beauty',
    title: '美容事業',
    description:
      '美しさと心地よさを大切にしたサロン空間で、一人ひとりに寄り添う美容サービスを提供しています。',
    status: 'active',
    imageSrc: '/images/business-beauty.png',
    imageAlt: '美容室の店内風景',
  },
  {
    id: 'coming-soon',
    title: '今後追加予定',
    description: '新たな事業領域への展開を準備しています。詳細が決まり次第、こちらでお知らせします。',
    status: 'comingSoon',
  },
]

export function Business() {
  return (
    <section
      id="business"
      className="section business"
      aria-labelledby="business-heading"
    >
      <div className="container">
        <div className="business__header">
          <span className="section-label">Business</span>
          <h2 id="business-heading" className="section-title">
            事業内容
          </h2>
          <p className="section-lead">
            現在は美容事業を展開しています。今後も事業領域を広げていく予定です。
          </p>
        </div>

        <ul className="business__list">
          {BUSINESS_ITEMS.map((item) => (
            <li
              key={item.id}
              className={`business-card${item.status === 'comingSoon' ? ' business-card--soon' : ''}`}
            >
              {item.imageSrc ? (
                <div className="business-card__media">
                  <img src={item.imageSrc} alt={item.imageAlt ?? ''} />
                </div>
              ) : (
                <div className="business-card__media business-card__media--placeholder" aria-hidden="true">
                  <span>Coming Soon</span>
                </div>
              )}
              <div className="business-card__body">
                {item.status === 'comingSoon' && (
                  <span className="business-card__badge">準備中</span>
                )}
                <h3 className="business-card__title">{item.title}</h3>
                <p className="business-card__text">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
