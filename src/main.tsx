import { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { Home } from './components/pages/Home'
import { StatusBar } from 'expo-status-bar'

const Stack = createNativeStackNavigator()

export const Main: FC = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name={'Home'} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar hidden/>
    </>
  )
}
