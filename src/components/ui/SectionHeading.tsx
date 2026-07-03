import type { ReactNode } from 'react'

interface SectionHeadingProps {
  children: ReactNode
  id?: string
  className?: string
}

export function SectionHeading({ children, id, className = '' }: SectionHeadingProps) {
  return (
    <h2
      id={id}
      className={`font-display text-2xl font-medium tracking-tight text-verde-oscuro sm:text-3xl ${className}`}
    >
      {children}
    </h2>
  )
}
