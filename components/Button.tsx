import * as React from 'react'
import {
  Pressable,
  Text,
  StyleSheet,
  GestureResponderEvent
} from 'react-native'

interface ButtonProps {
  onPress: (event: GestureResponderEvent) => void
  children: React.ReactNode
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  disabled = false
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[styles.buttonWrapper, disabled && styles.disabled]}
      disabled={disabled}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  buttonWrapper: {
    borderRadius: 8,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8
  },
  disabled: {
    backgroundColor: 'grey',
    opacity: 0.5
  },
  text: {
    fontSize: 16,
    color: 'white'
  }
})

export default Button