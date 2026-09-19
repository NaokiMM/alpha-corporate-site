export type BusinessStatus = 'active' | 'comingSoon'

export interface BusinessItem {
  id: string
  title: string
  description: string
  status: BusinessStatus
  imageSrc?: string
  imageAlt?: string
  imageFit?: 'cover' | 'contain' | 'original'
  points?: string[]
  stackTitle?: string
  stack?: string[]
  details?: {
    label: string
    value: string
    note?: string
  }[]
  link?: {
    href: string
    label: string
  }
  award?: {
    imageSrc: string
    imageAlt: string
    rank: string
    title: string
  }
}
