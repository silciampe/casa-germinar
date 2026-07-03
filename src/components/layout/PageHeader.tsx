import type { ReactNode } from 'react'
import { LogoMark } from '@/components/ui/LogoMark'

interface PageHeaderProps {
  kicker: string
  title: ReactNode
  subtitle?: ReactNode
  className?: string
}

export function PageHeader({ kicker, title, subtitle, className = '' }: PageHeaderProps) {
  return (
    <header
      className={`max-w-3xl border-b border-verde-oscuro/10 pb-12 md:pb-16 ${className}`}
    >
      <LogoMark size={40} className="mb-6" />
      <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-verde/90">
        {kicker}
      </p>
      <h1 className="font-display text-4xl font-medium tracking-tight text-verde-oscuro sm:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <div className="mt-6 text-base leading-relaxed text-gris sm:text-lg sm:leading-relaxed">
          {subtitle}
        </div>
      )}
    </header>
  )
}
