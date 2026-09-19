import type { BusinessItem } from '../types/business'
import { HpbBookButton } from './HpbBookButton'
import './Business.css'

function GoogleIcon() {
  return (
    <svg
      className="business-card__stack-icon business-card__stack-icon--google"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  )
}

function AwsIcon() {
  return (
    <svg
      className="business-card__stack-icon business-card__stack-icon--aws"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        fill="#FF9900"
        d="M12.1 3.2 5 7.1v9.8l7.1 3.9 7.1-3.9V7.1l-7.1-3.9zm0 1.7 5.4 2.95-5.4 2.96L6.7 7.85 12.1 4.9zM6.2 9.05 11.3 12v6.55L6.2 15.6V9.05zm6.2 9.5V12l5.1-2.95v6.55L12.4 18.55z"
      />
      <path
        className="business-card__aws-smile"
        fill="none"
        stroke="#FF9900"
        strokeWidth="1.35"
        strokeLinecap="round"
        d="M4.6 19.6c3.9 2.15 8.8 2.55 13.3.55 1.15-.5 2.15-1.15 3-1.9"
      />
    </svg>
  )
}

function StackIcon({ name }: { name: string }) {
  if (name.startsWith('AWS') || name.startsWith('Amazon')) return <AwsIcon />
  if (name.startsWith('Google')) return <GoogleIcon />
  return null
}

const BUSINESS_ITEMS: BusinessItem[] = [
  {
    id: 'beauty',
    title: '美容事業',
    description:
      '美しさと心地よさを大切にしたサロン空間で、\n一人ひとりに寄り添う美容サービスを提供しています。\nご予約はホットペッパービューティーからお申し込みいただけます。',
    status: 'active',
    imageSrc: '/images/business-beauty.png',
    imageAlt: '美容室の店内風景',
    imageFit: 'original',
    details: [
      { label: '住所', value: '東京都新宿区新宿３-14-23　新宿マヤビル ６F' },
      { label: '店名', value: "men's salon alpha 新宿【メンズサロンアルファ】" },
      { label: 'レビュー件数', value: '582件', note: '2026.09時点' },
      {
        label: 'ランキング',
        value: '新宿・高田馬場・代々木エリアの上位ランキング掲載店舗',
      },
    ],
    link: {
      href: 'https://beauty.hotpepper.jp/slnH000629134/',
      label: 'ホットペッパーで予約する',
    },
    award: {
      imageSrc: '/images/award-trophy.png',
      imageAlt: 'ホットペッパービューティーアワードのトロフィー',
      rank: '全国4位',
      title: 'ホットペッパービューティーアワード メンズ部門',
    },
  },
  {
    id: 'inventory',
    title: '材料管理事業',
    description: '美容サロンの薬剤・商材を、支える仕組み',
    status: 'active',
    imageSrc: '/images/business-inventory.jpg',
    imageAlt: '美容材料の在庫管理のイメージ',
    imageFit: 'contain',
    points: [
      '現在庫数、先月残在庫、必要在庫数の在庫管理',
      '週毎のディーラーへの必要発注数の管理',
      '週毎のディーラーからの納品数の管理',
      '週毎の施術使用金額のコスト管理',
      '週毎の店販売金額のコスト管理',
      '導入しているディーラーの商品の単位単価一覧を分析',
    ],
    stackTitle: '導入技術一覧',
    stack: [
      'Google SpreadSheet',
      'Google AppSheet',
      'Google Apps Script',
      'Google Drive API',
      'Google Cloud Platform',
      'Amazon Web Services',
      'AWS Route53',
    ],
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
          <span className="business__orb" aria-hidden="true" />
          <span className="section-label">Business</span>
          <h2 id="business-heading" className="section-title business__title">
            <svg className="business__title-icon" viewBox="0 0 24 24" aria-hidden="true">
              <rect
                x="3.6"
                y="8.2"
                width="16.8"
                height="11"
                rx="1.2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                d="M9 8.2V6.8A2.2 2.2 0 0 1 11.2 4.6h1.6A2.2 2.2 0 0 1 15 6.8v1.4"
              />
              <path stroke="currentColor" strokeWidth="1.5" d="M3.6 13h16.8" />
            </svg>
            事業内容
          </h2>
          <p className="section-lead business__lead">
            <span className="business__lead-dot" aria-hidden="true" />
            美容事業に加え、サロン現場の材料管理にも取り組んでいます。
          </p>
        </div>

        <ul className="business__list">
          {BUSINESS_ITEMS.map((item) => (
            <li
              key={item.id}
              className={`business-card${item.imageFit === 'contain' ? ' business-card--contain' : ''}${item.imageFit === 'original' ? ' business-card--original' : ''}`}
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
                <h3 className="business-card__title">{item.title}</h3>
                <p
                  className={`business-card__text${item.id === 'inventory' ? ' business-card__text--serif' : ''}`}
                >
                  {item.description.split('\n').map((line, index) => (
                    <span key={line}>
                      {index > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </p>
                {item.points && item.points.length > 0 && (
                  <ul className="business-card__points">
                    {item.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
                {item.stack && item.stack.length > 0 && (
                  <div className="business-card__stack">
                    {item.stackTitle && (
                      <p className="business-card__stack-title">{item.stackTitle}</p>
                    )}
                    <ul className="business-card__stack-list">
                      {item.stack.map((name) => (
                        <li key={name}>
                          <StackIcon name={name} />
                          <span>{name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.award && (
                  <div className="business-card__award">
                    <img
                      src={item.award.imageSrc}
                      alt={item.award.imageAlt}
                      width={160}
                      height={160}
                    />
                    <div>
                      <p className="business-card__award-rank">{item.award.rank}</p>
                      <p className="business-card__award-title">{item.award.title}</p>
                    </div>
                  </div>
                )}
                {item.details && item.details.length > 0 && (
                  <dl className="business-card__details">
                    {item.details.map((row) => (
                      <div key={row.label} className="business-card__detail">
                        <dt>{row.label}</dt>
                        <dd>
                          {row.value}
                          {row.note && (
                            <span className="business-card__note">{row.note}</span>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}
                {item.link && (
                  <HpbBookButton href={item.link.href} label={item.link.label} />
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
