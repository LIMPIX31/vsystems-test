import styled from 'styled-components/native'
import { normalizeFontWeight } from '../../utils'
import { theme } from '../../style/theme'

export interface TypographyProps {
  weight?: FontWeightLike
  size?: number
  selectable?: boolean
}

export const Typography = styled.Text.attrs<TypographyProps>(props => ({
  style: {
    fontSize: theme.size(props.size),
    fontWeight: props.weight ? normalizeFontWeight(props.weight) : 'inherit'
  },
}))<TypographyProps>`
  color: inherit;
`
