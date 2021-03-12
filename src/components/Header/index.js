import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { Ionicons } from '@expo/vector-icons'

export default function Header() {
  return (
    <LinearGradient
      style={styles.header}
      colors={['#1ed6ff', '#97c1ff']}
    >
      <Text style={styles.date}>12/03/2021</Text>
      <Text style={styles.city}>Caxias do Sul</Text>
      
      <Ionicons 
        name='cloud'
        color='#f1f7f7'
        size={150}
      />

      <Text style={styles.temp}>30º</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },

  date: {
    color: '#f1f7f7',
    fontSize: 16
  },

  city: {
    color: '#f1f7f7',
    fontSize: 20,
    fontWeight: 'bold'
  },

  temp: {
    color: '#f1f7f7',
    fontSize: 80,
    fontWeight: 'bold'
  }
})

