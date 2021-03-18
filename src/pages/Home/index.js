import React, { useState, useEffect } from 'react'
import { SafeAreaView, Text, StyleSheet, FlatList, View } from 'react-native'
import * as Location from 'expo-location'

import Menu from '../../components/Menu'
import Header from '../../components/Header'
import Conditions from '../../components/Conditions'
import ListCard from '../../components/ListCard'

import { api } from '../../services/api'
import { API_KEY } from '../../../keys'
import { condition } from '../../utils/condition'

export default function Home() {
  const [ errorMsg, setErrorMsg ] = useState(null)
  const [ loading, setLoading ] = useState(true)
  const [ weather, setWeather ] = useState([])
  const [ backgroundIcon, setBackgroundIcon ] = useState({ name: 'cloud', color: '#e8f0ff' })
  const [ background, setBackground ] = useState(['#1ed6ff', '#97c1ff'])

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestPermissionsAsync()

      if (status !== 'granted') {
        setErrorMsg('Permissão para acessar a localização negada.')
        setLoading(false)
        return
      }

      const location = await Location.getCurrentPositionAsync({})
      const { latitude, longitude } = location.coords

      const response = await api.get(`weather?key=${API_KEY}&lat=${latitude}&lon=${longitude}`)

      setWeather(response.data)
      if (response.data.results.currently === 'noite') setBackground(['#0c3741', '#0f2f61'])

      setBackgroundIcon(
        condition(response.data.results.condition_slug, false)
      )

      setLoading(false)
        
    })()

  }, [])

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 16}}>Carregando dados...</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <Header background={background} weather={weather} icon={backgroundIcon}/>
      <Conditions weather={weather}/>

      <FlatList 
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        data={weather.results.forecast}
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