import './Sns.css'

const SNS_LINKS = [
  {
    name: 'Instagram',
    handle: '@alpha_shinjuku',
    href: 'https://www.instagram.com/alpha_shinjuku/',
    note: 'サロン公式',
    icon: 'instagram',
  },
  {
    name: 'Instagram',
    handle: '@kimura_souya',
    href: 'https://www.instagram.com/kimura_souya/',
    note: '代表 木村奏也',
    icon: 'instagram',
  },
  {
    name: 'Threads',
    handle: '@kimura_souya',
    href: 'https://www.threads.com/@kimura_souya',
    note: '代表 木村奏也',
    icon: 'threads',
  },
] as const

const OFFICIAL_ICONS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/alpha_shinjuku/',
    icon: 'instagram' as const,
  },
  {
    name: 'Threads',
    href: 'https://www.threads.com/@kimura_souya',
    icon: 'threads' as const,
  },
]

function InstagramIcon({ gradientId }: { gradientId: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <radialGradient id={gradientId} cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill={`url(#${gradientId})`} />
      <rect
        x="2.15"
        y="2.15"
        width="19.7"
        height="19.7"
        rx="5.4"
        fill="none"
        stroke="#fff"
        strokeWidth="1.7"
      />
      <circle
        cx="12"
        cy="12"
        r="4.35"
        fill="none"
        stroke="#fff"
        strokeWidth="1.7"
      />
      <circle cx="17.35" cy="6.65" r="1.15" fill="#fff" />
    </svg>
  )
}

function ThreadsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="6" fill="#fff" />
      <path
        fill="#000"
        d="M16.65 11.13c.08-.43.12-.88.12-1.34C16.77 7.1 15.08 5.5 12.55 5.5c-2.76 0-4.5 1.95-4.5 4.72 0 .35.04.7.12 1.03C5.9 12.05 4.5 13.9 4.5 16.2c0 3.16 2.68 4.9 6.2 4.9 2.76 0 4.72-1.02 6.05-2.76.4.92.62 1.95.62 3.06v.5h1.85c.02-.28.04-.5.04-.8 0-1.74-.4-3.28-1.18-4.6.72-.92 1.14-2.05 1.14-3.37 0-.62-.1-1.22-.31-1.8h-.01zm-4.28 6.4c-2.46 0-4.28-1.14-4.28-3.16 0-1.44.92-2.56 2.76-3.08.72 1.64 1.96 2.96 3.68 3.88-.62 1.42-1.42 2.36-2.16 2.36zm1.94-4.7c-1.32-.82-2.34-1.94-2.86-3.28.3-.08.62-.12.92-.12 1.52 0 2.54.92 2.54 2.34 0 .4-.08.74-.2 1.04-.14 0-.26.02-.4.02z"
      />
    </svg>
  )
}

function SnsIcon({
  type,
  gradientId,
}: {
  type: 'instagram' | 'threads'
  gradientId: string
}) {
  return type === 'instagram' ? (
    <InstagramIcon gradientId={gradientId} />
  ) : (
    <ThreadsIcon />
  )
}

export function Sns() {
  return (
    <section id="sns" className="section sns" aria-labelledby="sns-heading">
      <div className="container sns__layout">
        <div className="sns__intro">
          <span className="section-label">SNS</span>
          <h2 id="sns-heading" className="section-title">
            公式SNS
          </h2>
          <ul className="sns__official">
            {OFFICIAL_ICONS.map((item) => (
              <li key={item.name}>
                <a
                  className={`sns__official-link sns__official-link--${item.icon}`}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={`sns__official-icon sns__official-icon--${item.icon}`}>
                    {item.icon === 'instagram' && (
                      <span className="sns__story-ring" aria-hidden="true" />
                    )}
                    <SnsIcon
                      type={item.icon}
                      gradientId={`ig-official-${item.icon}`}
                    />
                  </span>
                  <span className="sns__official-name">{item.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="sns__followers">
            木村奏也
            <span className="sns__followers-count">フォロワー 7,000人超え</span>
            <span className="sns__followers-note">2026年9月時点</span>
          </p>
        </div>

        <ul className="sns__list">
          {SNS_LINKS.map((item, index) => (
            <li key={`${item.name}-${item.handle}-${item.note}`}>
              <a
                className="sns__link"
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <span className="sns__brand">
                  <span className={`sns__icon sns__icon--${item.icon}`}>
                    {item.icon === 'instagram' && (
                      <span className="sns__story-ring sns__story-ring--sm" aria-hidden="true" />
                    )}
                    <SnsIcon
                      type={item.icon}
                      gradientId={`ig-row-${index}`}
                    />
                  </span>
                  <span className="sns__name">{item.name}</span>
                </span>
                <span className="sns__handle">{item.handle}</span>
                <span className="sns__note">{item.note}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
