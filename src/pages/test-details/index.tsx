import AdditionalInfo from '@/components/TestDetails/AdditionalInfo'
import HeroTestDetails from '@/components/TestDetails/HeroSec'
import Reports from '@/components/TestDetails/Reports'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'


const index = () => {
  return (
    <>
      <Header />
      <HeroTestDetails />
      <AdditionalInfo />
      <Reports />
      <Footer />
    </>
  )
}

export default index