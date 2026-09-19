import { Contact } from '../components/Contact'
import { usePageTitle } from '../hooks/usePageTitle'

export function ContactPage() {
  usePageTitle('お問い合わせ | 株式会社 alpha')

  return (
    <div className="page page--compact">
      <Contact />
    </div>
  )
}
