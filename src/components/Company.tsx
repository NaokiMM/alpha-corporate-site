import './Company.css'

interface CompanyRow {
  label: string
  value: string
  icon: 'building' | 'pin' | 'person' | 'calendar' | 'phone' | 'work'
}

const COMPANY_ROWS: CompanyRow[] = [
  { label: '会社名', value: '株式会社 alpha', icon: 'building' },
  { label: '所在地', value: '東京都新宿区新宿３-14-23　新宿マヤビル ６F', icon: 'pin' },
  { label: '代表者', value: '木村奏也', icon: 'person' },
  { label: '設立', value: '2022年', icon: 'calendar' },
  { label: '電話番号', value: '03-6709-8378', icon: 'phone' },
  { label: '事業内容', value: '美容事業、材料管理事業ほか', icon: 'work' },
]

function CompanyIcon({ type }: { type: CompanyRow['icon'] }) {
  if (type === 'building') {
    return (
      <svg className="company__icon company__icon--building" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          d="M5 20V8.5L12 4l7 4.5V20H5z"
        />
        <path className="company__icon-window" fill="currentColor" d="M8.2 10.2h2.1v2.1H8.2z" />
        <path className="company__icon-window" fill="currentColor" d="M13.7 10.2h2.1v2.1h-2.1z" />
        <path className="company__icon-window" fill="currentColor" d="M8.2 14.4h2.1v2.1H8.2z" />
        <path className="company__icon-window" fill="currentColor" d="M13.7 14.4h2.1v2.1h-2.1z" />
      </svg>
    )
  }

  if (type === 'pin') {
    return (
      <svg className="company__icon company__icon--pin" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          d="M12 21s6.5-6.4 6.5-11.2A6.5 6.5 0 0 0 5.5 9.8C5.5 14.6 12 21 12 21z"
        />
        <circle cx="12" cy="9.8" r="2.1" fill="currentColor" />
      </svg>
    )
  }

  if (type === 'person') {
    return (
      <svg className="company__icon company__icon--person" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="3.1" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          d="M5.6 19.4c1.1-3.6 3.7-5.4 6.4-5.4s5.3 1.8 6.4 5.4"
        />
      </svg>
    )
  }

  if (type === 'calendar') {
    return (
      <svg className="company__icon company__icon--calendar" viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="4.2"
          y="6.2"
          width="15.6"
          height="13.2"
          rx="1.2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path stroke="currentColor" strokeWidth="1.5" d="M4.2 10.2h15.6" />
        <path
          className="company__icon-hook"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          d="M8 4.6v3.2M16 4.6v3.2"
        />
      </svg>
    )
  }

  if (type === 'phone') {
    return (
      <svg className="company__icon company__icon--phone" viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.2 4.4h2.6l1.1 3.6-2 1.1a11 11 0 0 0 5 5l1.1-2 3.6 1.1v2.6c-7.2 1.4-13.6-5-11.4-11.4z"
        />
      </svg>
    )
  }

  return (
    <svg className="company__icon company__icon--work" viewBox="0 0 24 24" aria-hidden="true">
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
      <path className="company__icon-handle" stroke="currentColor" strokeWidth="1.5" d="M3.6 13h16.8" />
    </svg>
  )
}

export function Company() {
  return (
    <section
      id="company"
      className="section company"
      aria-labelledby="company-heading"
    >
      <div className="container company__layout">
        <div className="company__intro">
          <span className="section-label">Company</span>
          <h2 id="company-heading" className="section-title">
            会社概要
          </h2>
          <div className="company__portrait">
            <img
              src="/images/kimura-soya.jpg"
              alt="代表 木村奏也"
              width={800}
              height={1000}
            />
            <p className="company__portrait-name">代表　木村奏也</p>
          </div>
        </div>

        <dl className="company__table">
          {COMPANY_ROWS.map((row) => (
            <div key={row.label} className="company__row">
              <dt>
                <CompanyIcon type={row.icon} />
                {row.label}
              </dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
