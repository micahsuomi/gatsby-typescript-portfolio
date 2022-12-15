/* eslint-disable prettier/prettier */
export type HeaderProps = {
  siteTitle: string
}
export type HeadProps = {
  title: string
}
export type IconCardProps = {
  title: string
  image: any
  description: any
  options: any
}
export type PortfolioItemProps = {
  slug: string
  title: string
  subtitle: string
  image: any
  demoLink: string
  active: boolean
}
export type EducationItemProps = {
  title: string
  category: string
  slug: string
  topics: string[]
  image: any
  description: any
  options: any
}
export type BlogItemProps = {
  title: string
  slug: string
  tags: string[]
  image: any
  date: string
}
export type FooterProps = {
  copyright: string
  github: string
  linkedin: string
  facebook: string
  instagram: string
}
