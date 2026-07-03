import { Container } from '@/components/layout/Container'
import { PageHeader } from '@/components/layout/PageHeader'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { huertaContent } from '@/data/huerta'

function TextBlock({ parrafos }: { parrafos: readonly string[] }) {
  return (
    <div className="space-y-5">
      {parrafos.map((parrafo) => (
        <p
          key={parrafo}
          className="text-base leading-relaxed text-gris sm:text-lg sm:leading-relaxed"
        >
          {parrafo}
        </p>
      ))}
    </div>
  )
}

export function HuertaSection() {
  const { titulo, introduccion, sentido, elementos } = huertaContent

  return (
    <article className="pb-24 pt-10 md:pb-32 md:pt-14">
      <Container>
        <PageHeader kicker="Huerta" title={titulo} />

        <div className="mt-16 space-y-16 md:mt-20 md:space-y-20">
          <ScrollReveal>
            <section aria-labelledby="espacio-heading" className="max-w-3xl">
              <SectionHeading id="espacio-heading">{introduccion.titulo}</SectionHeading>
              <div className="mt-6">
                <TextBlock parrafos={introduccion.parrafos} />
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section aria-labelledby="sentido-heading" className="max-w-3xl">
              <SectionHeading id="sentido-heading">{sentido.titulo}</SectionHeading>
              <div className="mt-6">
                <TextBlock parrafos={sentido.parrafos} />
              </div>
            </section>
          </ScrollReveal>

          <ScrollReveal>
            <section aria-labelledby="elementos-heading" className="max-w-3xl">
              <SectionHeading id="elementos-heading">{elementos.titulo}</SectionHeading>
              <ul className="mt-6 flex flex-wrap gap-3">
                {elementos.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-verde/25 bg-verde/5 px-4 py-2 text-sm font-medium text-verde-oscuro"
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
