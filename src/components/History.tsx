import './History.css'

interface HistoryItem {
  year: string
  events: string[]
}

const HISTORY_ITEMS: HistoryItem[] = [
  {
    year: '2022',
    events: ['株式会社 alpha 設立'],
  },
]

export function History() {
  return (
    <section
      id="history"
      className="section history"
      aria-labelledby="history-heading"
    >
      <div className="container history__layout">
        <div className="history__intro">
          <span className="section-label">History</span>
          <h2 id="history-heading" className="section-title">
            沿革
          </h2>
        </div>

        <ol className="history__list">
          {HISTORY_ITEMS.map((item) => (
            <li key={item.year} className="history__item">
              <p className="history__year">
                <span className="history__dot" aria-hidden="true" />
                {item.year}
              </p>
              <ul>
                {item.events.map((event) => (
                  <li key={event}>{event}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
