import { Link } from 'react-router-dom'
import { LogoMark } from '@/components/ui/LogoMark'

interface LogoProps {
  onNavigate?: () => void
  showText?: boolean
  className?: string
}

export function Logo({ onNavigate, showText = true, className = '' }: LogoProps) {
  return (
    <Link
      to="/"
      onClick={onNavigate}
      className={`group inline-flex items-center gap-3 transition-opacity hover:opacity-80 ${className}`}
      aria-label="Cultivar autonomía — Inicio"
    >
      <LogoMark size={34} className="shrink-0 transition-transform duration-300 group-hover:scale-105" />
      {showText && (
        <span className="font-display text-lg font-medium text-verde-oscuro md:text-xl">
          Cultivar autonomía
        </span>
      )}
    </Link>
  )
}
