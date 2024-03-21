'use client'
import type { SpeedInsight } from '@darkmaterial/api'
import { speed_insights } from '@darkmaterial/api'
import { DateTime } from 'luxon'
import { usePathname } from 'next/navigation'
import { useReportWebVitals } from 'next/web-vitals'
import { useMediaQuery } from 'react-responsive'

type Props = {
  appId?: string
}
export function WebVitals({ appId }: Props) {
  const path = usePathname()
  const isMobile = useMediaQuery({ query: '(max-width: 786px)' })
  useReportWebVitals((metric) => {
    if (appId) {
      const insight: SpeedInsight = {
        path: path,
        createdAt: DateTime.now().toSeconds(),
        metric: metric,
        type: isMobile ? 'mobile' : 'desktop',
      }
      // process.env.NODE_ENV === 'development' && console.log(insight)
      process.env.NODE_ENV === 'production' && speed_insights.upload(appId, insight)
    }
  })
  return <></>
}

