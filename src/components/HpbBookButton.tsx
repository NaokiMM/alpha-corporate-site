import './HpbBookButton.css'

interface HpbBookButtonProps {
  href: string
  label?: string
}

export function HpbBookButton({
  href,
  label = 'HPBで予約する',
}: HpbBookButtonProps) {
  return (
    <a className="hpb-book" href={href} target="_blank" rel="noreferrer">
      <img
        src="/images/hpb/logo-135x45.gif"
        alt="HOT PEPPER Beauty"
        width={135}
        height={45}
      />
      <span>{label}</span>
    </a>
  )
}
