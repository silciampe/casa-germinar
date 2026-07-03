export interface BibliografiaReferencia {
  id: string
  texto: string
  url?: string
}

export const bibliografiaReferencias: BibliografiaReferencia[] = [
  {
    id: 'aguirre-2004',
    texto: 'Aguirre, P. (2004). Ricos flacos y gordos pobres. Capital Intelectual.',
  },
  {
    id: 'aguirre-2017',
    texto: 'Aguirre, P. (2017). Una historia social de la comida. Lugar Editorial.',
  },
  {
    id: 'aguirre-cordova-polischer-2015',
    texto:
      'Aguirre, P., Córdova, D., & Polischer, G. (2015). Cocinar y comer en Argentina hoy. Fundasap.',
  },
  {
    id: 'barruti-2013',
    texto: 'Barruti, S. (2013). Malcomidos. Planeta.',
  },
  {
    id: 'katz-2013',
    texto: 'Katz, M. (2013). Somos lo que comemos. Aguilar.',
  },
  {
    id: 'katz-aguirre-bruera-2011',
    texto:
      'Katz, M., Aguirre, P., & Bruera, M. (2011). Comer: Puentes entre la alimentación y la cultura. Libros del Zorzal.',
  },
  {
    id: 'ministerio-salud',
    texto:
      'Ministerio de Salud de la Nación. (s. f.). Alimentación saludable.',
    url: 'https://www.argentina.gob.ar/salud/alimentacion-saludable',
  },
]
