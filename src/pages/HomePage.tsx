import { About } from '../components/About'
import { Hero } from '../components/Hero'
import { HomeContact } from '../components/HomeContact'
import { HomeReel } from '../components/HomeReel'
import { Sns } from '../components/Sns'
import { usePageTitle } from '../hooks/usePageTitle'

export function HomePage() {
  usePageTitle('株式会社 alpha |  alpha Co., Ltd.')

  return (
    <>
      <Hero />
      <About />
      <Sns />
      <HomeReel />
      <HomeContact />
    </>
  )
}
