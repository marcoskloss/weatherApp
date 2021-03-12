import React from 'react'
import { SafeAreaView, Text, StyleSheet, FlatList } from 'react-native'

import Menu from '../../components/Menu'
import Header from '../../components/Header'
import Conditions from '../../components/Conditions'
import ListCard from '../../components/ListCard'

const forecast = [
  {
    "date": "03-12",
    "weekday": "Fri",
    "max": 26,
    "min": 17,
    "description": "Thunderstorms",
    "condition": "storm"
  },
  {
    "date": "03-13",
    "weekday": "Sat",
    "max": 26,
    "min": 18,
    "description": "Thunderstorms",
    "condition": "clear_day"
  },
  {
    "date": "03-14",
    "weekday": "Sun",
    "max": 27,
    "min": 17,
    "description": "Thunderstorms",
    "condition": "storm"
  },
  {
    "date": "03-15",
    "weekday": "Mon",
    "max": 26,
    "min": 17,
    "description": "Thunderstorms",
    "condition": "storm"
  },
  {
    "date": "03-16",
    "weekday": "Tue",
    "max": 26,
    "min": 17,
    "description": "Thunderstorms",
    "condition": "storm"
  },
  {
    "date": "03-17",
    "weekday": "Wed",
    "max": 27,
    "min": 17,
    "description": "Thunderstorms",
    "condition": "storm"
  },
  {
    "date": "03-18",
    "weekday": "Thu",
    "max": 23,
    "min": 18,
    "description": "Thunderstorms",
    "condition": "storm"
  },
  {
    "date": "03-19",
    "weekday": "Fri",
    "max": 24,
    "min": 18,
    "description": "Isolated thundershowers",
    "condition": "storm"
  },
  {
    "date": "03-20",
    "weekday": "Sat",
    "max": 26,
    "min": 19,
    "description": "Thunderstorms",
    "condition": "cloud"
  },
  {
    "date": "03-21",
    "weekday": "Sun",
    "max": 25,
    "min": 18,
    "description": "Thunderstorms",
    "condition": "storm"
  }
]

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header />
      <Conditions />

      <FlatList 
        style={styles.list}
        data={forecast}
        keyExtractor={item => item.date}
        renderItem={({item}) => <ListCard data={item}/>}
        horizontal={true}
        alignItems='center'
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e8f0ff',
    paddingTop: '5%',
    paddingHorizontal: 15,
    paddingBottom: 15,
  },

  list: {
    marginVertical: 10,
  }
})