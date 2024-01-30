'use client'
import { format } from "@/helpers/format"
import { cn } from "@/lib/utils"
import { ElementRef, useEffect, useMemo, useRef, useState } from "react"

type Props = {
  starsCount?: number
}
const StarField = ({ starsCount=50 }: Props) => {
  const stars = useMemo(() => { return Array.from({ length: starsCount }).map((_, i) => i) }, [])
  const ref = useRef<ElementRef<'div'>>(null)
  const [width, setWidth] = useState<number>(0)
  const [height, setHeight] = useState<number>(0)
  const [visible, setVisible] = useState<boolean>(false)
  useEffect(() => {
    const div = ref.current
    if (div) {
      const { clientWidth, clientHeight } = div
      setWidth(clientWidth)
      setHeight(clientHeight)
      setVisible(true)
    }
  },[ref])
  return (
    <div ref={ref} className={cn(
      visible ? 'opacity-100' : 'opacity-0',
      "absolute w-full h-full"
    )}>
      {
        stars.map(
          star => <div key={'star-' + star} style={{
            top: format.randomNum(0 + 10, height - 10),
            left: format.randomNum(0 + 10, width - 10)
          }}
          className="absolute w-0.5 h-0.5 rounded-full bg-primary" />
        )
      }
    </div>
  )
}

export { StarField }