import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text, TextInput, TouchableOpacity, Easing } from 'react-native'
import React from 'react'
import BackgroundTimer from 'react-native-background-timer'
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import { NativeModules } from 'react-native'
import { CircleTimer } from '../components/CircleTimer'

type MainScreenParamList = {
  Main: any
}
type NavigationProp = BottomTabNavigationProp<MainScreenParamList, 'Main'>

// { navigation }: NavigationProp
export const MainScreen: React.FC = (props) => {
  const [isStart, setStart] = React.useState<boolean>(false)
  // 타이머가 돌아갈 때 실제로 표시되는 시간 (분)
  const [count, setCount] = React.useState<number>(1)
  // 타이머 시간을 입력할 때 사용 (분)
  const [inputCount, setInputCount] = React.useState<string>('1')

  const ref = React.createRef<any>()

  React.useEffect(() => {
    if (!isStart && count === 0) {
      BackgroundTimer.stopBackgroundTimer()
      console.log('Off')
    }
  }, [isStart, count])

  const onStartMusicTimer = React.useCallback(async () => {
    if (isStart || count === 0) {
      return
    }

    let convertMinToSec = parseInt(inputCount, 10) * 60
    const convertMinToMillSec = parseInt(inputCount, 10) * 60 * 1000
    console.log(512,inputCount, convertMinToSec, convertMinToMillSec)

    setStart(true)
    ref.current.animate(100, convertMinToMillSec, Easing.quad)

    const intervalId = BackgroundTimer.setInterval(() => {
      convertMinToSec = convertMinToSec - 1
      console.log(10, convertMinToSec)
      if (convertMinToSec > 60) {
        setCount(Math.floor((convertMinToSec % 3600) / 60))
      } else if (convertMinToSec > 0) {
        setCount(Math.ceil((convertMinToSec % 3600) / 60))
      } else {
        setCount(0)
      }
    }, 1000)

    BackgroundTimer.runBackgroundTimer(() => {
      BackgroundTimer.clearInterval(intervalId)
      MediaControlModule.pauseMedia()
      setStart(false)
    }, convertMinToMillSec)
  }, [isStart, inputCount, ref])

  const onChangeTextToNumber = React.useCallback((v: string) => {
    setInputCount(v)
    setCount(parseInt(v, 10))
  }, [])

  const MediaControlModule = NativeModules.MediaControl
  return (
    <SafeAreaView style={styles.container}>
      <CircleTimer timerRef={ref} count={count} isStart={isStart} />
      <TextInput keyboardType="numeric" value={inputCount} onChangeText={(v) => onChangeTextToNumber(v)} />
      <TouchableOpacity onPress={onStartMusicTimer}>
        <Text>Start Music Timer!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
