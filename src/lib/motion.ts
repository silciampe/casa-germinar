import type { Transition, Variants } from 'framer-motion'

export const gentleEase = [0.25, 0.1, 0.25, 1] as const

export const fadeUpTransition: Transition = {
  duration: 0.9,
  ease: gentleEase,
}

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: fadeUpTransition,
  },
}

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.1,
      ease: gentleEase,
    },
  },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
}

export const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.02,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: gentleEase,
    },
  },
}
