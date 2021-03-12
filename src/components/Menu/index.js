import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

export default function Menu() {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => navigation.openDrawer()}
      style={styles.container}
    >
      <Feather 
        name="menu"
        size={36}
        color='#373737'
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 10,
    top: 40,
    zIndex: 10,
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopEndRadius: 35,
    borderBottomEndRadius: 35,
    borderBottomStartRadius: 35,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3
    }
  }
})