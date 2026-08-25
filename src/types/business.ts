export type BusinessStatus = 'active' | 'comingSoon'

export interface BusinessItem {
  id: string
  title: string
  description: string
  status: BusinessStatus
  imageSrc?: string
  imageAlt?: string
}
