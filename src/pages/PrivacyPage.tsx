import { Link } from 'react-router-dom'
import '../components/Legal.css'
import { usePageTitle } from '../hooks/usePageTitle'

export function PrivacyPage() {
  usePageTitle('プライバシーポリシー | 株式会社 alpha')

  return (
    <div className="page">
      <section className="section legal" aria-labelledby="privacy-heading">
        <div className="container">
          <span className="section-label">Privacy Policy</span>
          <h1 id="privacy-heading" className="section-title">
            プライバシーポリシー
          </h1>
          <p className="legal__updated">制定日：2026年9月19日</p>

          <div className="legal__body">
            <section>
              <h2>1. 基本方針</h2>
              <p>
                株式会社
                alpha（以下「当社」）は、本ウェブサイトおよび当社事業において取得する個人情報を、個人情報保護法その他関連法令に従い、適切に取り扱います。
              </p>
            </section>

            <section>
              <h2>2. 取得する情報</h2>
              <p>当社は、お問い合わせなどの際に、次の情報を取得することがあります。</p>
              <ul>
                <li>氏名、電話番号、メールアドレスその他ご連絡先</li>
                <li>お問い合わせ内容</li>
                <li>本ウェブサイトの閲覧に関する情報（アクセスログ等）</li>
              </ul>
            </section>

            <section>
              <h2>3. 利用目的</h2>
              <p>取得した個人情報は、次の目的で利用します。</p>
              <ul>
                <li>お問い合わせへの対応</li>
                <li>当社サービスに関するご案内</li>
                <li>ウェブサイトおよび事業運営の改善</li>
                <li>法令に基づく対応</li>
              </ul>
            </section>

            <section>
              <h2>4. 第三者提供</h2>
              <p>
                当社は、法令に基づく場合を除き、本人の同意なく個人情報を第三者に提供しません。
              </p>
            </section>

            <section>
              <h2>5. 安全管理</h2>
              <p>
                当社は、個人情報の漏えい、滅失または毀損を防止するため、必要かつ適切な安全管理措置を講じます。
              </p>
            </section>

            <section>
              <h2>6. 開示・訂正・削除</h2>
              <p>
                ご本人から個人情報の開示、訂正、削除等のご請求があった場合、法令に従い、合理的な範囲で対応します。
              </p>
            </section>

            <section>
              <h2>7. お問い合わせ</h2>
              <p>
                本ポリシーに関するお問い合わせは、
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
