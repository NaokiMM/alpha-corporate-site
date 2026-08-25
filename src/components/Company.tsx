import './Company.css'

interface CompanyRow {
  label: string
  value: string
}

const COMPANY_ROWS: CompanyRow[] = [
  { label: '会社名', value: '株式会社Alpha' },
  { label: '所在地', value: '準備中' },
  { label: '代表者', value: '準備中' },
  { label: '設立', value: '準備中' },
  { label: '事業内容', value: '美容事業ほか' },
]

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
          <p className="section-lead">
            株式会社Alphaの基本情報です。詳細は順次公開してまいります。
          </p>
        </div>

        <dl className="company__table">
          {COMPANY_ROWS.map((row) => (
            <div key={row.label} className="company__row">
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
