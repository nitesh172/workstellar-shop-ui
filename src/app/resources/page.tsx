import SubscriptionSection from '@/components/Blocks/SubscriptionSection'
import { PaginationProvider } from '@/context/PaginationContext'
import { ResourceProvider } from '@/context/ResourceContext'
import dynamic from 'next/dynamic'
import React from 'react'
const ResourceMainPage = dynamic(() => import('@/components/Blocks/resources'))

const Resources = () => {
  return (
    <div className="pb-7 md:pb-8 relative">
      <PaginationProvider>
        <ResourceProvider>
          <ResourceMainPage />
        </ResourceProvider>
      </PaginationProvider>
      <SubscriptionSection />
    </div>
  )
}

export default Resources
