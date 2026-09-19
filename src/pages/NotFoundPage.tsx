import { Link } from 'react-router-dom'
import { usePageTitle } from '../hooks/usePageTitle'

export function NotFoundPage() {
  usePageTitle('ページが見つかりません | 株式会社 alpha')

  return (
    <div className="page">
      <section className="section" aria-labelledby="not-found-heading">
        <div className="container">
          <span className="section-label">404</span>
          <h1 id="not-found-heading" className="section-title">
            ページが見つかりません
          </h1>
          <p className="section-lead">
            お探しのページは存在しないか、移動した可能性があります。
          </p>
          <p className="page-action">
            <Link className="btn btn-primary" to="/">
              トップへ戻る
            </Link>
          </p>
        </div>
      </section>
    </div>
  )
}
