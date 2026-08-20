"use client"

import { motion, useScroll, useTransform, MotionValue } from "framer-motion"
import { useRef } from "react"

interface ScrollProject {
  num: string
  title: string
  subtitle: string
  src: string
}

const StickyCard_001 = ({
  i,
  num,
  title,
  subtitle,
  src,
  progress,
  range,
  fadeOutStart,
  targetScale,
}: {
  i: number
  num: string
  title: string
  subtitle: string
  src: string
  progress: MotionValue<number>
  range: [number, number]
  fadeOutStart: number | null
  targetScale: number
}) => {
  const container = useRef<HTMLDivElement>(null)
  const scale = useTransform(progress, range, [1, targetScale])

  const fadeInStart = Math.max(0, range[0])
  const fadeInEnd = Math.min(1, Math.max(fadeInStart + 0.01, range[0] + 0.03))

  const opacityKeyframes: number[] = [0, 1]
  const opacityStops: number[] = [fadeInStart, fadeInEnd]
  const shiftKeyframes: number[] = [24, 0]

  if (fadeOutStart !== null) {
    const outEnd = Math.min(1, Math.max(fadeInEnd + 0.01, fadeOutStart))
    const outStart = Math.max(fadeInEnd + 0.005, outEnd - 0.02)
    opacityStops.push(outStart, outEnd)
    opacityKeyframes.push(1, 0)
    shiftKeyframes.push(0, -16)
  }

  const textOpacity = useTransform(progress, opacityStops, opacityKeyframes)
  const textShift = useTransform(progress, opacityStops, shiftKeyframes)

  return (
    <div ref={container} className="sticky top-24 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="scroll-stack-row">
        <motion.div
          style={{ scale, top: `calc(-5vh + ${i * 15 + 40}px)` }}
          className="scroll-stack-card relative -top-1/4 flex origin-top flex-col overflow-hidden rounded-2xl
                     h-[190px] w-[260px]
                     sm:h-[240px] sm:w-[360px]
                     lg:h-[320px] lg:w-[440px]"
        >
          <img src={src} alt={title} className="h-full w-full object-cover" />
          <span className="scroll-stack-index">{String(i + 1).padStart(2, '0')}</span>
        </motion.div>
        <motion.div className="scroll-stack-copy" style={{ opacity: textOpacity, y: textShift }}>
          <span className="eyebrow">Capability {num}</span>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </motion.div>
      </div>
    </div>
  )
}

export function ImagesScrollingAnimation({ projects }: { projects: ScrollProject[] }) {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] })

  return (
    <div ref={container} className="scroll-stack-container">
      {projects.map((project, i) => {
        const targetScale = Math.max(0.75, 1 - (projects.length - i - 1) * 0.08)
        const nextStart = i < projects.length - 1 ? (i + 1) * (1 / projects.length) : null
        return (
          <StickyCard_001
            key={project.title}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * (1 / projects.length), 1]}
            fadeOutStart={nextStart}
            targetScale={targetScale}
          />
        )
      })}
    </div>
  )
}
