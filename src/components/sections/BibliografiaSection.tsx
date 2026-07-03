import { Container } from '@/components/layout/Container'
import { PageHeader } from '@/components/layout/PageHeader'
import { ScrollReveal } from '@/components/shared/ScrollReveal'
import { bibliografiaReferencias } from '@/data/bibliografia'

export function BibliografiaSection() {
  return (
    <article className="pb-24 pt-10 md:pb-32 md:pt-14">
      <Container>
        <PageHeader kicker="Bibliografía" title="Bibliografía" />

        <ScrollReveal className="mt-16 md:mt-20">
          <section aria-labelledby="referencias-heading" className="max-w-3xl">
            <h2 id="referencias-heading" className="sr-only">
              Referencias
            </h2>

            <ol className="space-y-6">
              {bibliografiaReferencias.map((referencia, index) => (
                <li
                  key={referencia.id}
                  className="flex gap-4 text-base leading-relaxed text-gris sm:text-lg sm:leading-relaxed"
                >
                  <span
                    aria-hidden="true"
                    className="w-6 shrink-0 pt-0.5 text-right font-medium text-verde-oscuro/60"
                  >
                    {index + 1}.
                  </span>
                  <p className="[text-indent:-2rem] pl-8 sm:[text-indent:-2.25rem] sm:pl-9">
                    {referencia.texto}
                    {referencia.url && (
                      <>
                        {' '}
                        <a
                          href={referencia.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="break-all text-verde-oscuro underline decoration-verde/30 underline-offset-4 transition-colors hover:decoration-verde"
                        >
                          {referencia.url}
                        </a>
                      </>
                    )}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        </ScrollReveal>
      </Container>
    </article>
  )
}
