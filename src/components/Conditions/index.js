import React from 'react'
import { View, Text, StyleSheet} from 'react-native'

import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

export default function Conditions({ weather }) {
  return (
    <View style={styles.container}>
      <View style={styles.condition}>
        <Feather name='wind' size={23} color='#1ed6ff'/>
        <Text>{weather.results.wind_speedy}</Text>
      </View>

      <View style={styles.condition}>
        <MaterialCommunityIcons name='weather-sunset-up' size={23} color='#1ed6ff'/>
        <Text>{weather.results.sunrise}</Text>
      </View>

      <View style={styles.condition}>
        <MaterialCommunityIcons name='weather-sunset-down' size={23} color='#1ed6ff'/>
        <Text>{weather.results.sunset}</Text>
      </View>

      <View style={styles.condition}>
        <Feather name='droplet' size={23} color='#1ed6ff'/>
        <Text>{weather.results.humidity}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    borderRadius: 8 
  },

  condition: {
    height: '65%',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})