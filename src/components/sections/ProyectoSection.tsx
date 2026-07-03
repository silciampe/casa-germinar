import { Container } from '@/components/layout/Container'
import { PageHeader } from '@/components/layout/PageHeader'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { proyectoContent } from '@/data/proyecto'

export function ProyectoSection() {
  const { nombre, contexto, objetivoGeneral, objetivosEspecificos, duracion } =
    proyectoContent

  return (
    <article className="pb-24 pt-10 md:pb-32 md:pt-14">
      <Container>
        <PageHeader
          kicker="Proyecto"
          title={nombre.titulo}
          subtitle={nombre.subtitulo}
        />

        <div className="mt-16 space-y-20 md:mt-20 md:space-y-24">
          <ScrollReveal>
            <section aria-labelledby="contexto-heading" className="max-w-3xl">
              <SectionHeading id="contexto-heading">{contexto.titulo}</SectionHeading>
              <div className="mt-6 space-y-5">
                {contexto.parrafos.map((parrafo) => (
                  <p key={parrafo} className="text-base leading-relaxed text-gris sm:text-lg sm:leading-relaxed">
                    {parrafo}
                  </p>
                ))}
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section aria-labelledby="objetivo-general-heading" className="max-w-3xl">
              <SectionHeading id="objetivo-general-heading">
                {objetivoGeneral.titulo}
              </SectionHeading>
              <p className="mt-6 text-base leading-relaxed text-gris sm:text-lg sm:leading-relaxed">
                {objetivoGeneral.texto}
              </p>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section aria-labelledby="objetivos-especificos-heading" className="max-w-3xl">
              <SectionHeading id="objetivos-especificos-heading">
                {objetivosEspecificos.titulo}
              </SectionHeading>
              <ul className="mt-6 space-y-4">
                {objetivosEspecificos.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 text-base leading-relaxed text-gris sm:text-lg sm:leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracota/70"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section aria-labelledby="duracion-heading" className="max-w-3xl">
              <SectionHeading id="duracion-heading">{duracion.titulo}</SectionHeading>
              <ul className="mt-6 space-y-3">
                {duracion.items.map((item) => (
                  <li
                    key={item}
                    className="text-base leading-relaxed text-gris sm:text-lg sm:leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>
        </div>
      </Container>
    </article>
  )
}
