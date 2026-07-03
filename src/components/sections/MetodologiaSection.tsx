import { Users } from 'lucide-react'
import { Container } from '@/components/layout/Container'
import { PageHeader } from '@/components/layout/PageHeader'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { CycleDiagram } from '@/components/sections/metodologia/CycleDiagram'
import { metodologiaContent } from '@/data/metodologia'

export function MetodologiaSection() {
  const { titulo, talleresCiclicos, colaboradoras, estructuraEncuentro } =
    metodologiaContent

  return (
    <article className="pb-24 pt-10 md:pb-32 md:pt-14">
      <Container>
        <PageHeader kicker="Metodología" title={titulo} />

        <ScrollReveal className="mt-16 md:mt-20">
          <section
            aria-labelledby="talleres-ciclicos-heading"
            className="rounded-md border border-verde-oscuro/10 bg-white/40 px-6 py-10 sm:px-10 sm:py-14 md:px-14 md:py-16"
          >
            <SectionHeading id="talleres-ciclicos-heading">
              {talleresCiclicos.titulo}
            </SectionHeading>

            <div className="mt-8 space-y-10">
              <div className="mx-auto max-w-2xl space-y-5">
                {talleresCiclicos.parrafos.slice(0, 2).map((parrafo) => (
                  <p
                    key={parrafo}
                    className="text-base leading-relaxed text-gris sm:text-lg sm:leading-relaxed"
                  >
                    {parrafo}
                  </p>
                ))}
              </div>

              <CycleDiagram />

              <div className="mx-auto max-w-2xl space-y-5">
                {talleresCiclicos.parrafos.slice(2).map((parrafo) => (
                  <p
                    key={parrafo}
                    className="text-base leading-relaxed text-gris sm:text-lg sm:leading-relaxed"
                  >
                    {parrafo}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal className="mt-16 md:mt-20">
          <section
            aria-labelledby="colaboradoras-heading"
            className="relative overflow-hidden rounded-md border border-terracota/25 bg-terracota/5 px-6 py-10 sm:px-10 sm:py-12 md:px-14"
          >
            <div
              aria-hidden="true"
              className="absolute -right-6 -top-6 text-terracota/10"
            >
              <Users size={120} strokeWidth={1} />
            </div>

            <div className="relative max-w-3xl">
              <h2
                id="colaboradoras-heading"
                className="font-display text-2xl font-medium leading-snug tracking-tight text-verde-oscuro sm:text-3xl"
              >
                {colaboradoras.titulo}
              </h2>

              <div className="mt-6 space-y-5">
                {colaboradoras.parrafos.map((parrafo) => (
                  <p
                    key={parrafo}
                    className="text-base leading-relaxed text-gris sm:text-lg sm:leading-relaxed"
                  >
                    {parrafo}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        <div className="mt-16 max-w-3xl space-y-8 md:mt-20 md:space-y-10">
          <ScrollReveal>
            <section aria-labelledby="dinamica-heading">
              <div className="space-y-5">
                {estructuraEncuentro.introduccion.map((parrafo) => (
                  <p
                    key={parrafo}
                    className="text-base leading-relaxed text-gris sm:text-lg sm:leading-relaxed"
                  >
                    {parrafo}
                  </p>
                ))}
              </div>

              <p
                id="dinamica-heading"
                className="mt-8 text-base font-medium text-verde-oscuro sm:text-lg"
              >
                {estructuraEncuentro.dinamicaTitulo}
              </p>

              <ol className="mt-6 space-y-4">
                {estructuraEncuentro.dinamica.map((paso, index) => (
                  <li
                    key={paso}
                    className="flex gap-4 text-base leading-relaxed text-gris sm:text-lg sm:leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-verde/30 bg-verde/5 font-medium text-sm text-verde-oscuro"
                    >
                      {index + 1}
                    </span>
                    <span className="pt-0.5">{paso}</span>
                  </li>
                ))}
              </ol>
            </section>
          </ScrollReveal>
        </div>
      </Container>
    </article>
  )
}
