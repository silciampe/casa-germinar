export const metodologiaContent = {
  titulo: 'Metodología de los encuentros',
  talleresCiclicos: {
    titulo: 'Talleres cíclicos',
    parrafos: [
      'La permanencia de cada familia es variable, generalmente entre tres y seis meses, por lo que el ingreso y egreso de participantes es continuo.',
      'Esta característica dificulta la implementación de un programa tradicional con principio y fin definidos.',
      'Como respuesta a esta realidad, la propuesta se organiza en doce encuentros cíclicos.',
      'Las participantes pueden incorporarse en cualquier momento del ciclo sin perder continuidad en el proceso de aprendizaje.',
      'Los encuentros son independientes entre sí y pueden cursarse en cualquier orden.',
    ],
    diagrama: {
      leyenda:
        'No existe un Encuentro 1 obligatorio sino un recorrido continuo.',
    },
  },
  colaboradoras: {
    titulo:
      'Quienes repiten un encuentro participan como colaboradoras del taller.',
    parrafos: [
      'En caso de repetir un encuentro, asumirán un rol activo colaborando con la coordinación de las actividades, fortaleciendo su autoestima, favoreciendo el aprendizaje entre pares y consolidando los conocimientos adquiridos.',
      'La repetición de un encuentro constituye una oportunidad para fortalecer el aprendizaje mediante la participación activa y el acompañamiento a nuevas integrantes.',
    ],
  },
  estructuraEncuentro: {
    introduccion: [
      'Cada encuentro tendrá una duración de tres horas.',
      'La estructura será siempre la misma para facilitar la participación y brindar previsibilidad.',
    ],
    dinamicaTitulo: 'La dinámica propuesta incluye:',
    dinamica: [
      'Pregunta disparadora relacionada con la temática del día.',
      'Actividad grupal participativa.',
      'Espacio de trabajo en la huerta.',
      'Cierre colectivo con una propuesta o consigna para reflexionar durante la semana.',
    ],
  },
} as const

export const TOTAL_ENCUENTROS = 12
