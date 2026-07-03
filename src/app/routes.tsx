import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '@/components/layout/MainLayout'
import { HomePage } from '@/pages/HomePage'
import { ProyectoPage } from '@/pages/ProyectoPage'
import { MetodologiaPage } from '@/pages/MetodologiaPage'
import { EncuentrosPage } from '@/pages/EncuentrosPage'
import { FundamentosPage } from '@/pages/FundamentosPage'
import { HuertaPage } from '@/pages/HuertaPage'
import { BibliografiaPage } from '@/pages/BibliografiaPage'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyecto" element={<ProyectoPage />} />
        <Route path="/metodologia" element={<MetodologiaPage />} />
        <Route path="/huerta" element={<HuertaPage />} />
        <Route path="/encuentros" element={<EncuentrosPage />} />
        <Route path="/fundamentos" element={<FundamentosPage />} />
        <Route path="/bibliografia" element={<BibliografiaPage />} />
      </Route>
    </Routes>
  )
}
