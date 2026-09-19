export interface StaffMember {
  id: string
  name: string
  nameEn: string
  role: string
  imageSrc?: string
  imageAlt?: string
  award?: string
  tags?: string[]
  comment?: string
  bookingHref?: string
  bookingLabel?: string
}
