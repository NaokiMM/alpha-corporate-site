import { Link } from 'react-router-dom'
import '../components/Legal.css'
import { usePageTitle } from '../hooks/usePageTitle'

export function TermsPage() {
  usePageTitle('利用規約 | 株式会社 alpha')

  return (
    <div className="page">
      <section className="section legal" aria-labelledby="terms-heading">
        <div className="container">
          <span className="section-label">Terms of Use</span>
          <h1 id="terms-heading" className="section-title">
            利用規約
          </h1>
          <p className="legal__updated">制定日：2026年9月19日</p>

          <div className="legal__body">
            <section>
              <h2>1. 適用</h2>
              <p>
                本規約は、株式会社
                alpha（以下「当社」）が運営する本ウェブサイトの利用条件を定めるものです。本ウェブサイトをご利用いただいた時点で、本規約に同意いただいたものとみなします。
              </p>
            </section>

            <section>
              <h2>2. 禁止事項</h2>
              <p>本ウェブサイトの利用にあたり、次の行為を禁止します。</p>
              <ul>
                <li>法令または公序良俗に反する行為</li>
                <li>当社または第三者の権利を侵害する行為</li>
                <li>本ウェブサイトの運営を妨害する行為</li>
                <li>虚偽の情報を送信する行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>
            </section>

            <section>
              <h2>3. 知的財産権</h2>
              <p>
                本ウェブサイトに掲載する文章、画像、ロゴその他のコンテンツに関する権利は、当社または正当な権利者に帰属します。無断での複製、転載、改変を禁じます。
              </p>
            </section>

            <section>
              <h2>4. 免責</h2>
              <p>
                当社は、本ウェブサイトの内容について正確性・完全性を保つよう努めますが、その内容を保証するものではありません。本ウェブサイトの利用により生じた損害について、当社に故意または重過失がある場合を除き、責任を負いません。
              </p>
            </section>

            <section>
              <h2>5. 変更</h2>
              <p>
                当社は、必要に応じて本規約を変更することがあります。変更後の内容は、本ウェブサイトに掲載した時点から効力を生じます。
              </p>
            </section>

            <section>
              <h2>6. 準拠法・管轄</h2>
              <p>
                本規約は日本法に準拠します。本ウェブサイトに関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
              </p>
            </section>

            <section>
              <h2>7. お問い合わせ</h2>
              <p>
                本規約に関するお問い合わせは、
                <Link to="/contact">お問い合わせ</Link>
                ページ記載の連絡先までご連絡ください。
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}
