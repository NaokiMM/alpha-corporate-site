import type { StaffMember } from '../types/staff'
import { HpbBookButton } from './HpbBookButton'
import './Staff.css'

const ROLE_ORDER = [
  { role: '代表', en: 'Director' },
  { role: 'スタイリスト', en: 'Stylist' },
  { role: 'アシスタント', en: 'Assistant' },
] as const

const STAFF_MEMBERS: StaffMember[] = [
  {
    id: 'kimura-soya',
    name: '木村奏也',
    nameEn: 'Soya Kimura',
    role: '代表',
    imageSrc: '/images/kimura-soya.jpg',
    imageAlt: '代表 木村奏也',
    award: 'ホットペッパーアワード メンズ部門 全国4位',
    tags: ['メンズ', "men's"],
    comment:
      '他店では体験できない最上級のヘアカットをご提供いたします。骨格に合わせたオーダーメイドヘアを体験ください。',
    bookingHref: 'https://beauty.hotpepper.jp/slnH000629134/stylist/T000831187/',
    bookingLabel: 'ホットペッパーで予約する',
  },
  {
    id: 'konishi-shota',
    name: '小西翔太',
    nameEn: 'Shota Konishi',
    role: 'スタイリスト',
    imageSrc: '/images/konishi-shota.jpg',
    imageAlt: 'スタイリスト 小西翔太',
    tags: ['メンズ', "men's"],
    comment:
      '美容師人生、メンズのみに携わってきているのでメンズヘア全般が得意です。センターパートやフェザーパーマ、ツイスパや波巻きには特に自信があります。髪質や骨格に合わせたミリ単位のカット、パーマが売りです。',
    bookingHref: 'https://beauty.hotpepper.jp/slnH000629134/stylist/T000971248/',
    bookingLabel: 'ホットペッパーで予約する',
  },
  {
    id: 'isokawa-yuho',
    name: '五十川優歩',
    nameEn: 'Yuho Isokawa',
    role: 'スタイリスト',
    imageSrc: '/images/isokawa-yuho.jpg',
    imageAlt: 'スタイリスト 五十川優歩',
    tags: ['メンズ', '縮毛矯正', '癖毛'],
    comment:
      '丁寧なカウンセリングに基づく縮毛矯正をベースに、幅広いスタイルの提案が得意です。癖毛でお悩みの方や、思い通りのスタイリングができない方は、一度お任せください。',
    bookingHref: 'https://beauty.hotpepper.jp/slnH000629134/stylist/T000954441/',
    bookingLabel: 'ホットペッパーで予約する',
  },
  {
    id: 'nozaki-sora',
    name: '野崎大空',
    nameEn: 'Sora Nozaki',
    role: 'アシスタント',
    imageSrc: '/images/nozaki-sora.jpg',
    imageAlt: 'アシスタント 野崎大空',
    tags: ['メンズ'],
    comment: '一人ひとりの悩みに最適解を見つけます。',
  },
  {
    id: 'kanzaki-mitsuki',
    name: '神崎光希',
    nameEn: 'Mitsuki Kanzaki',
    role: 'アシスタント',
    imageSrc: '/images/kanzaki-mitsuki.jpg',
    imageAlt: 'アシスタント 神崎光希',
    tags: ['メンズ'],
    comment: '「美容」も「おしゃれ」もお任せください。',
  },
  {
    id: 'miseki-towa',
    name: '三関永遠',
    nameEn: 'Towa Miseki',
    role: 'アシスタント',
    imageSrc: '/images/miseki-towa.jpg',
    imageAlt: 'アシスタント 三関永遠',
    tags: ['メンズ'],
    comment: '髪を通して笑顔にする『カミスマイル』をご提供します。',
  },
]

function groupByRole(members: StaffMember[]) {
  return ROLE_ORDER.map((group) => ({
    ...group,
    members: members.filter((member) => member.role === group.role),
  })).filter((group) => group.members.length > 0)
}

export function Staff() {
  const groups = groupByRole(STAFF_MEMBERS)

  return (
    <section id="staff" className="section staff" aria-labelledby="staff-heading">
      <div className="container">
        <div className="staff__header">
          <span className="staff__orb" aria-hidden="true" />
          <span className="section-label">Staff</span>
          <h2 id="staff-heading" className="section-title staff__title">
            <svg className="staff__title-icon" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="8.2" cy="7.2" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="15.8" cy="7.2" r="2.4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                d="M3.8 18.6c.7-3.2 2.6-4.9 4.4-4.9s3.7 1.7 4.4 4.9M11.4 18.6c.7-3.2 2.6-4.9 4.4-4.9s3.7 1.7 4.4 4.9"
              />
            </svg>
            スタッフ
          </h2>
          <p className="section-lead">美容事業に携わるメンバーをご紹介します。</p>
        </div>

        {groups.map((group) => (
          <div key={group.role} className="staff__group">
            <h3 className="staff__group-title">
              <span className="staff__group-en">{group.en}</span>
              <span className="staff__group-name">
                <span className={`staff__group-dot staff__group-dot--${group.en.toLowerCase()}`} aria-hidden="true" />
                {group.role}
              </span>
            </h3>
            <ul className="staff__list">
              {group.members.map((member) => (
                <li key={member.id} className="staff-card">
                  {member.imageSrc ? (
                    <div className="staff-card__media">
                      <img src={member.imageSrc} alt={member.imageAlt ?? ''} />
                    </div>
                  ) : (
                    <div
                      className="staff-card__media staff-card__media--placeholder"
                      aria-hidden="true"
                    />
                  )}
                  <div className="staff-card__body">
                    <p className="staff-card__role">{member.role}</p>
                    <p className="staff-card__name-en">{member.nameEn}</p>
                    <h4 className="staff-card__name">{member.name}</h4>
                    {member.award && (
                      <p className="staff-card__award">
                        <img
                          src="/images/award-trophy.png"
                          alt=""
                          width={36}
                          height={36}
                        />
                        <span>{member.award}</span>
                      </p>
                    )}
                    {member.tags && member.tags.length > 0 && (
                      <ul className="staff-card__tags">
                        {member.tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    )}
                    {member.comment && <p className="staff-card__text">{member.comment}</p>}
                    {member.bookingHref && (
                      <HpbBookButton
                        href={member.bookingHref}
                        label={member.bookingLabel ?? 'ホットペッパーで予約する'}
                      />
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
