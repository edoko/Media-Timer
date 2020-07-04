import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { RoutedScreen } from './src/RoutedScreen'

const App = () => {
  return (
    <SafeAreaProvider>
      <RoutedScreen />
    </SafeAreaProvider>
  )
}

export default App
