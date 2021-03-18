import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { Ionicons } from '@expo/vector-icons'

export default function Header({ background, weather, icon }) {
  const hasIcon = icon ? true : false

  return (
    <LinearGradient
      style={styles.header}
      colors={background}
    >
      <Text style={styles.date}>{weather.results.date}</Text>
      <Text style={styles.city}>{weather.results.city_name}</Text>
      
     {hasIcon &&  <Ionicons 
        name={icon.name}
        color={icon.color}
        size={150}
      />}

      <Text style={styles.temp}>{weather.results.temp}º</Text>
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

