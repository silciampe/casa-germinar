import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/layout/Container'
import { LogoMark } from '@/components/ui/LogoMark'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import {
  fadeUp,
  imageReveal,
  staggerContainer,
} from '@/lib/motion'

const heroImageSrc = '/images/germinar1-1.webp'

export function HeroSection() {
  const prefersReducedMotion = useReducedMotion()

  const motionProps = prefersReducedMotion
    ? { initial: false, animate: 'visible' as const }
    : { initial: 'hidden', animate: 'visible' as const }

  return (
    <section aria-labelledby="hero-title" className="pb-20 pt-10 md:pb-32 md:pt-16 lg:pt-20">
      <Container>
        <motion.div
          className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16"
          variants={staggerContainer}
          {...motionProps}
        >
          <motion.header
            className="lg:col-span-4 lg:pt-8"
            variants={fadeUp}
          >
            <LogoMark size={44} className="mb-6" />
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.22em] text-verde/90">
              Silvina Ciampechini
            </p>

            <h1
              id="hero-title"
              className="font-display text-[2.75rem] font-medium leading-[1.08] tracking-tight text-verde-oscuro sm:text-5xl lg:text-[3.25rem] xl:text-6xl"
            >
              Cultivar
              <span className="block text-verde">autonomía</span>
            </h1>

            <div className="mt-8 h-px w-12 bg-terracota/50" aria-hidden="true" />

            <p className="mt-8 max-w-md text-base leading-relaxed text-gris sm:text-lg sm:leading-relaxed">
              Propuesta de talleres de educación alimentaria y huerta comunitaria
              para Casa Germinar.
            </p>

            <motion.div className="mt-10" variants={fadeUp}>
              <Button to="/proyecto">
                Conocer el proyecto
                <ArrowRight size={16} aria-hidden="true" className="text-terracota" />
              </Button>
            </motion.div>
          </motion.header>

          <motion.figure
            className="relative lg:col-span-8 lg:col-start-5"
            variants={staggerContainer}
          >
            <motion.div
              className="overflow-hidden rounded-sm shadow-soft md:rounded-md"
              variants={imageReveal}
            >
              <img
                src={heroImageSrc}
                alt="Fachada de Casa Germinar"
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/9] lg:aspect-[16/10]"
                width={1600}
                height={1000}
              />
            </motion.div>

            <motion.figcaption
              className="mt-4 max-w-sm text-xs leading-relaxed text-gris/70 sm:mt-5"
              variants={fadeUp}
            >
              Así como una huerta necesita tiempo y cuidados para crecer, las
              personas fortalecen su autonomía cuando pueden aprender y
              participar.
            </motion.figcaption>
          </motion.figure>
        </motion.div>
      </Container>
    </section>
  )
}
