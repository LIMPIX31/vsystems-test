import { StatusBar } from 'expo-status-bar'
import { Text } from 'react-native'
import { FC } from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const HeWo = styled.Text`
  font-weight: bold;
  font-size: 25px;
`

export const Main: FC = () => {
  return (
    <Container>
      <HeWo>Hello world</HeWo>
      <StatusBar style='auto' />
    </Container>
  )
}
