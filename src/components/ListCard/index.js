import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Ionicons } from '@expo/vector-icons'

import { condition } from '../../utils/condition'


export default function ListCard({data}) {
  const conditionIcon = condition(data.condition)

  return (
    <View style={styles.container}>
      <Text style={styles.date }>
        { (date => date.replace('-', '/'))(data.date) }
      </Text>

      <Ionicons 
        name={conditionIcon.name} 
        color={conditionIcon.color} 
        size={25}
      />

      <View style={styles.temp}>
        <Text>{`${data.min}º`}</Text>
        <Text style={styles.maxTemp}>
          {`${data.max}º`}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 80,
    backgroundColor: '#fff',
    marginRight: 20,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  date: {
    fontSize: 14
  },

  temp: {
    alignItems: 'center',
  },

  maxTemp: {
    fontSize: 18, 
    fontWeight: 'bold',
  }
})