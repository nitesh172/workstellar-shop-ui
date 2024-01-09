import SubscriptionSection from '@/components/Blocks/SubscriptionSection'
import dynamic from 'next/dynamic'
const HeroSection = dynamic(() => import('@/components/Blocks/home/HeroSection'))
const ResourceSection = dynamic(() => import('@/components/Blocks/home/ResourceSection'))
const CustomerJourney = dynamic(() => import('@/components/Blocks/home/CustomerJourney'))
const ContactSection = dynamic(() => import('@/components/Blocks/home/ContactSection'))

export default function Home() {
  return (
    <main className="pt-1 pb-14 lg:pt-10 lg:pb-28">
      <HeroSection />
      <ResourceSection />
      <CustomerJourney />
      <ContactSection />
      <SubscriptionSection />
    </main>
  )
}
