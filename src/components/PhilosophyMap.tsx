import './PhilosophyMap.css'

interface MapItem {
  index: string
  label: string
  note?: string
}

const MAP_ITEMS: MapItem[] = [
  { index: '00', label: 'キャッチフレーズについて' },
  { index: '01', label: '経営理念', note: '余白・共栄・開花' },
  { index: '02', label: '社是', note: '開拓徹底' },
  { index: '03', label: '行動指針', note: 'Values' },
  { index: '04', label: '美容事業としての未来', note: 'Vision' },
  { index: '05', label: '美容事業としての役割', note: 'Mission' },
  { index: '06', label: '再現性を生む設計図' },
  { index: '07', label: 'alphaの評価軸' },
]

export function PhilosophyMap() {
  return (
    <section
      id="philosophy-map"
      className="section philosophy-map"
      aria-labelledby="philosophy-map-heading"
    >
      <div className="container">
        <h2 id="philosophy-map-heading" className="section-title philosophy-map__title">
          目次
        </h2>

        <div className="philosophy-map__map">
          <div className="philosophy-map__origin">
            <p className="philosophy-map__node">
              すべての人生に、
              <br />
              +alphaを。
            </p>
            <span className="philosophy-map__stem" aria-hidden="true" />
            <p className="philosophy-map__node">余白・共栄・開花</p>
          </div>

          <ol className="philosophy-map__branches">
            {MAP_ITEMS.map((item) => (
              <li key={item.index}>
                <p className="philosophy-map__item">
                  <span className="philosophy-map__index">{item.index}</span>
                  <span className="philosophy-map__label">
                    {item.label}
                    {item.note ? (
                      <span className="philosophy-map__note">{item.note}</span>
                    ) : null}
                  </span>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
