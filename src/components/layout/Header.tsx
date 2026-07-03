import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { navItems } from '@/data/navigation'
import { Container } from '@/components/layout/Container'
import { Logo } from '@/components/ui/Logo'

const linkClassName = ({ isActive }: { isActive: boolean }) =>
  [
    'rounded-full px-3 py-2 text-sm transition-colors duration-200',
    isActive
      ? 'font-medium text-verde-oscuro'
      : 'text-gris hover:text-verde-oscuro',
  ].join(' ')

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-verde-oscuro/5 bg-crema/90 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Logo onNavigate={closeMenu} />

          <nav
            aria-label="Navegación principal"
            className="hidden items-center gap-1 md:flex"
          >
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} className={linkClassName}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-verde-oscuro transition-colors hover:bg-verde-oscuro/5 md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </Container>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Navegación móvil"
          className="border-t border-verde-oscuro/5 md:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  [
                    'rounded-xl px-4 py-3 text-base transition-colors duration-200',
                    isActive
                      ? 'bg-verde-oscuro/5 font-medium text-verde-oscuro'
                      : 'text-gris hover:bg-verde-oscuro/5 hover:text-verde-oscuro',
                  ].join(' ')
                }
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </Container>
        </nav>
      )}
    </header>
  )
}
