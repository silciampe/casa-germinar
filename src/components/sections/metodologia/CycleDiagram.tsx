import { TOTAL_ENCUENTROS } from '@/data/metodologia'

const SIZE = 420
const CENTER = SIZE / 2
const NODE_RADIUS = 16
const ORBIT_RADIUS = 150

function getNodePosition(index: number) {
  const angle = (index / TOTAL_ENCUENTROS) * 2 * Math.PI - Math.PI / 2
  return {
    x: CENTER + ORBIT_RADIUS * Math.cos(angle),
    y: CENTER + ORBIT_RADIUS * Math.sin(angle),
  }
}

function describeOrbitPath() {
  return `
    M ${CENTER} ${CENTER - ORBIT_RADIUS}
    A ${ORBIT_RADIUS} ${ORBIT_RADIUS} 0 1 1 ${CENTER - 0.01} ${CENTER - ORBIT_RADIUS}
  `
}

export function CycleDiagram() {
  const nodes = Array.from({ length: TOTAL_ENCUENTROS }, (_, index) => ({
    number: index + 1,
    ...getNodePosition(index),
  }))

  return (
    <figure className="mx-auto w-full max-w-md" aria-labelledby="cycle-diagram-caption">
      <svg
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        className="h-auto w-full"
        role="img"
        aria-label="Diagrama circular de doce encuentros en un ciclo continuo"
      >
        <defs>
          <marker
            id="cycle-arrow"
            markerWidth="8"
            markerHeight="8"
            refX="7"
            refY="4"
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill="#6D8F58" />
          </marker>
        </defs>

        <circle
          cx={CENTER}
          cy={CENTER}
          r={ORBIT_RADIUS}
          fill="none"
          stroke="#6D8F58"
          strokeWidth="1.5"
          strokeOpacity="0.25"
          strokeDasharray="6 6"
        />

        <path
          d={describeOrbitPath()}
          fill="none"
          stroke="#6D8F58"
          strokeWidth="2"
          strokeOpacity="0.55"
          markerEnd="url(#cycle-arrow)"
        />

        {nodes.map(({ number, x, y }) => (
          <g key={number}>
            <circle
              cx={x}
              cy={y}
              r={NODE_RADIUS}
              fill="#FAF8F3"
              stroke="#46633D"
              strokeWidth="1.5"
            />
            <text
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="central"
              fill="#46633D"
              fontSize="13"
              fontFamily="Inter, sans-serif"
              fontWeight="500"
            >
              {number}
            </text>
          </g>
        ))}

        <text
          x={CENTER}
          y={CENTER - 8}
          textAnchor="middle"
          fill="#46633D"
          fontSize="14"
          fontFamily="Playfair Display, serif"
          fontWeight="500"
        >
          Recorrido
        </text>
        <text
          x={CENTER}
          y={CENTER + 14}
          textAnchor="middle"
          fill="#46633D"
          fontSize="14"
          fontFamily="Playfair Display, serif"
          fontWeight="500"
        >
          continuo
        </text>
      </svg>

      <figcaption
        id="cycle-diagram-caption"
        className="mt-6 text-center text-sm leading-relaxed text-gris/80"
      >
        No existe un Encuentro 1 obligatorio sino un recorrido continuo.
      </figcaption>
    </figure>
  )
}
