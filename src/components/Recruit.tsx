import { Link } from 'react-router-dom'
import './Recruit.css'

const POSITIONS = [
  {
    id: 'stylist',
    title: 'スタイリスト',
    text: 'メンズヘアを軸に、カウンセリングからカット・パーマまで担当します。',
  },
  {
    id: 'assistant',
    title: 'アシスタント',
    text: 'サロンワークを支えながら、技術と人間性を一緒に磨いていきます。',
  },
] as const

const STAFF_VOICES = [
  {
    id: 'konishi-shota',
    name: '小西翔太',
    role: 'スタイリスト',
    imageSrc: '/images/konishi-shota.jpg',
    text: '技術の話ばかりではなく、人としての向き合い方を先に求められる。その空気があるから、お客様にもスタッフ同士にも、ごまかさずに向き合えるようになりました。',
  },
  {
    id: 'isokawa-yuho',
    name: '五十川優歩',
    role: 'スタイリスト',
    imageSrc: '/images/isokawa-yuho.jpg',
    text: '入社して感じたのは、仕上がりだけでなく、途中の判断もきちんと見てもらえること。急がせず、丁寧に積み上げていい、という安心感があります。',
  },
  {
    id: 'nozaki-sora',
    name: '野崎大空',
    role: 'アシスタント',
    imageSrc: '/images/nozaki-sora.jpg',
    text: 'まだ技術はこれからですが、現場では「なぜそうするのか」をちゃんと教えてもらえます。分からないまま流されず、自分の言葉で考えられるようになってきました。',
  },
  {
    id: 'kanzaki-mitsuki',
    name: '神崎光希',
    role: 'アシスタント',
    imageSrc: '/images/kanzaki-mitsuki.jpg',
    text: 'おしゃれを追うだけでなく、人と誠実に接する姿勢が土台になっている。その前提があるから、毎日のサロンワークにも緊張感とやりがいがあります。',
  },
  {
    id: 'miseki-towa',
    name: '三関永遠',
    role: 'アシスタント',
    imageSrc: '/images/miseki-towa.jpg',
    text: 'お客様が帰られたあとの会話も含めて、チームで仕事をしている感覚があります。一人で抱え込まず、成長できる場所だと思います。',
  },
] as const

export function Recruit() {
  return (
    <section
      id="recruit"
      className="section recruit"
      aria-labelledby="recruit-heading"
    >
      <div className="recruit__media">
        <video autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source
            src="/video/9737935-uhd_3840_2160_24fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="recruit__veil" aria-hidden="true" />
        <div className="recruit__media-copy">
          <span className="recruit__media-en">Recruit</span>
          <h1 id="recruit-heading" className="recruit__media-title">
            求人採用
          </h1>
        </div>
      </div>

      <div className="container recruit__body">
        <div className="recruit__header">
          <p className="recruit__catch">
            技術以前に、
            <br />
            人として誠実であること。
          </p>

          <div className="recruit__voices">
            <h2 className="recruit__voices-title">過去入社したスタッフたちの声</h2>
            <ul className="recruit__voices-list">
              {STAFF_VOICES.map((voice) => (
                <li key={voice.id} className="recruit__voice">
                  <img src={voice.imageSrc} alt="" width={80} height={100} />
                  <div>
                    <p className="recruit__voice-role">{voice.role}</p>
                    <p className="recruit__voice-name">{voice.name}</p>
                    <p className="recruit__voice-text">{voice.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <p className="recruit__lead">
            men’s salon alpha 新宿では、
            <br />
            一緒に現場をつくるメンバーを募集しています。
          </p>
        </div>

        <ul className="recruit__positions">
          {POSITIONS.map((position) => (
            <li key={position.id} className="recruit__card">
              <h2 className="recruit__card-title">{position.title}</h2>
              <p className="recruit__card-text">{position.text}</p>
            </li>
          ))}
        </ul>

        <dl className="recruit__table">
          <div className="recruit__row">
            <dt>勤務地</dt>
            <dd>東京都新宿区新宿３-14-23　新宿マヤビル ６F</dd>
          </div>
          <div className="recruit__row">
            <dt>店舗</dt>
            <dd>men's salon alpha 新宿</dd>
          </div>
          <div className="recruit__row">
            <dt>応募方法</dt>
            <dd>
              お電話にてご連絡ください。
              <br />
              <a className="recruit__tel" href="tel:0367098378">
                03-6709-8378
              </a>
            </dd>
          </div>
        </dl>

        <p className="recruit__note">
          詳細は
          <Link to="/contact">お問い合わせ</Link>
          からもご確認いただけます。
        </p>
      </div>
    </section>
  )
}
