import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'ghost'

interface ButtonProps {
  to: string
  children: ReactNode
  variant?: ButtonVariant
  className?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'border-terracota/30 bg-crema text-verde-oscuro hover:border-terracota/60 hover:bg-terracota/5',
  ghost: 'border-transparent text-verde-oscuro hover:text-terracota',
}

export function Button({
  to,
  children,
  variant = 'primary',
  className = '',
}: ButtonProps) {
  return (
    <Link
      to={to}
      className={[
        'inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300',
        variantStyles[variant],
        className,
      ].join(' ')}
    >
      {children}
    </Link>
  )
}
