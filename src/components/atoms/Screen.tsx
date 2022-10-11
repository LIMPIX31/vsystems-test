import styled from 'styled-components/native'
import { theme } from '../../style/theme'

export const Screen = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  padding: 20px;
  background: ${theme.back};
  color: ${theme.front};
`
