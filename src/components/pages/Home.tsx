import { FC } from 'react'
import styled from 'styled-components/native'
import { Screen } from '../atoms/Screen'
import { Text } from 'react-native'

const Page = styled(Screen)``

export const Home: FC = () => {
  return <Page><Text>1234</Text></Page>
}
