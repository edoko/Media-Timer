import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MainScreen } from './screens/MainScreen'
import { SettingsScreen } from './screens/SettingsScreen'

const MainStackScreen: React.FC = () => {
  const MainStack = createStackNavigator()

  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Main" component={MainScreen} />
    </MainStack.Navigator>
  )
}

const SettingsStackScreen: React.FC = () => {
  const SettingsStack = createStackNavigator()

  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
    </SettingsStack.Navigator>
  )
}

const HomeStackScreen: React.FC = () => {
  const HomeTab = createBottomTabNavigator()

  return (
    <HomeTab.Navigator
      tabBarOptions={{
        activeTintColor: '#5965e5',
        inactiveTintColor: '#d3d3d3',
      }}>
      <HomeTab.Screen name="Main" component={MainStackScreen} />
      <HomeTab.Screen name="Settings" component={SettingsStackScreen} />
    </HomeTab.Navigator>
  )
}

export const RoutedScreen: React.FC = () => {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeStackScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Setting" component={SettingsStackScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
