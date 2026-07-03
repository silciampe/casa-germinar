import { Download } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { LogoMark } from '@/components/ui/LogoMark'

const cvPath = '/cv/Silvina-Ciampechini-CV.pdf'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-verde-oscuro/5 bg-crema">
      <Container className="py-10 md:py-12">
        <div className="space-y-3">
          <LogoMark size={32} />
          <div>
            <p className="font-display text-lg text-verde-oscuro">Cultivar autonomía</p>
            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-2">
              <p className="text-sm text-gris/80">Silvina Ciampechini</p>
              <a
                href={cvPath}
                download="Silvina-Ciampechini-CV.pdf"
                className="inline-flex items-center gap-1.5 rounded-full border border-terracota/30 px-3 py-1.5 text-xs font-medium text-verde-oscuro transition-colors hover:border-terracota/60 hover:bg-terracota/5"
              >
                <Download size={14} aria-hidden="true" className="text-terracota" />
                Descargar CV
              </a>
            </div>
          </div>
        </div>

        <p className="mt-8 text-xs text-gris/60">
          © {currentYear} Cultivar autonomía
        </p>
      </Container>
    </footer>
  )
}
