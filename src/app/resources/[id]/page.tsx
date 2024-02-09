'use client'
import ResourcePage from '@/components/Blocks/resources/ResourcePage'
import dynamic from 'next/dynamic'
import React from 'react'
const SubscriptionSection = dynamic(
  () => import('@/components/Blocks/SubscriptionSection')
)

const Resource = ({ params }: { params: { id: string } }) => {
  const { id } = params

  return (
    <div className="pb-7 md:pb-14 relative">
      <ResourcePage id={id} />
      <SubscriptionSection />
    </div>
  )
}

export default Resource
