import type { ReactNode } from 'react'
import { Container } from '@/components/layout/Container'
import { PageHeader } from '@/components/layout/PageHeader'

interface PageShellProps {
  kicker: string
  title: ReactNode
  subtitle?: ReactNode
  children?: ReactNode
}

export function PageShell({ kicker, title, subtitle, children }: PageShellProps) {
  return (
    <article className="pb-24 pt-10 md:pb-32 md:pt-14">
      <Container>
        <PageHeader kicker={kicker} title={title} subtitle={subtitle} />
        {children}
      </Container>
    </article>
  )
}
