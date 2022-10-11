import { fontScale } from '../native/screen'

export const theme = {
  accent: {
    primary: '#ff6c00',
  },
  back: '#342e2d',
  front: '#fff6ed',
  size: (value = 1) => fontScale * 16 * value + 'px',
  space: (value = 1) => value * 6 + 'px'
}

export type Theme = typeof theme
