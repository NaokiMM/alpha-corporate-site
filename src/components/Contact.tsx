import { useState } from 'react'
import './Contact.css'

const INQUIRY_TYPES = [
  'サロン・店舗について',
  '事業・サービスについて',
  '取材・撮影・メディアについて',
  '採用について',
  'その他のお問い合わせ',
] as const

export function Contact() {
  const [selectedType, setSelectedType] = useState<string | null>(null)

  return (
    <section
      id="contact"
      className="section contact"
      aria-labelledby="contact-heading"
    >
      <div className="container contact__layout">
        <div className="contact__intro">
          <span className="section-label">Contact</span>
          <h2 id="contact-heading" className="section-title">
            お問い合わせ
          </h2>
        </div>

        <div className="contact__body">
          <p className="contact__topic-label" id="inquiry-type-label">
            お問い合わせ内容
          </p>
          <div
            className="contact__choices"
            role="radiogroup"
            aria-labelledby="inquiry-type-label"
          >
            {INQUIRY_TYPES.map((type) => {
              const selected = selectedType === type
              return (
                <button
                  key={type}
                  type="button"
                  className={`contact__choice${selected ? ' is-selected' : ''}`}
                  role="radio"
                  aria-checked={selected}
                  onClick={() => setSelectedType(type)}
                >
                  {type}
                </button>
              )
            })}
          </div>

          {selectedType && (
            <div className="contact__call">
              <p className="contact__text">
                お問い合わせ内容をご確認のうえ、
                <br />
                お電話にてご連絡ください。
              </p>
              <a className="contact__phone" href="tel:0367098378">
                03-6709-8378
              </a>
            </div>
          )}

          <dl className="contact__table">
            <div className="contact__row">
              <dt>所在地</dt>
              <dd>東京都新宿区新宿３-14-23　新宿マヤビル ６F</dd>
            </div>
            <div className="contact__row">
              <dt>電話番号</dt>
              <dd>
                <a className="contact__tel" href="tel:0367098378">
                  03-6709-8378
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}
