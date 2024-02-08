import SubscriptionSection from '@/components/Blocks/SubscriptionSection'
import ResourceMainPage from '@/components/Blocks/resources'
import React from 'react'

const Resources = () => {
  return (
    <div className="py-7 md:py-14 relative">
      <ResourceMainPage />
      <SubscriptionSection />
    </div>
  )
}

export default Resources
