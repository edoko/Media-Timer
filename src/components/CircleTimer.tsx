import { View, Text } from 'react-native'
import { AnimatedCircularProgress } from 'react-native-circular-progress'
import React from 'react'

type CircleTimerProps = {
  timerRef: any
  count: number
  isStart: boolean
}

export const CircleTimer: React.FC<CircleTimerProps> = ({ timerRef, count, isStart }) => {
  return (
    <View>
      <AnimatedCircularProgress
        ref={timerRef}
        size={200}
        width={10}
        fill={0}
        rotation={0}
        tintColor="#00e0ff"
        backgroundColor="#3d5875">
        {() => <Text>{count}</Text>}
      </AnimatedCircularProgress>
    </View>
  )
}
