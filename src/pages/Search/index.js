import React, { useState } from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Keyboard } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

import { api } from '../../services/api'
import { API_KEY } from '../../../keys'

import Header from '../../components/Header'
import Conditions from '../../components/Conditions'

export default function Search() {
  const navigation = useNavigation()
  const [ input, setInput ] = useState('')
  const [ city, setCity ] = useState(null)
  const [ error, setError ] = useState(false)

  async function handleSearch(cityName) {
    const response = await api.get(`weather?key=${API_KEY}&city_name=${cityName}`)

    if (response.data.by === 'default') {
      setError(true)
      setInput('')
      setCity(null)
      Keyboard.dismiss()
      return
    }

    setError(false)
    setCity(response.data)
    setInput('')
    Keyboard.dismiss()

  }

  if (city) {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => setCity(null)}>
        <Feather
          name='chevron-left'
          size={32}
          color='#1a1a1a'
        />
        <Text style={{ fontSize: 22 }}>Voltar</Text>
      </TouchableOpacity>

      <View style={styles.searchBox}>
        <TextInput
          value={input}
          onChangeText={(text) => setInput(text)}
          placeholder="Ex: Caxias do Sul, RS"
          style={styles.input} 
        />
        <TouchableOpacity style={styles.inputButton} onPress={() => handleSearch(input)}>
          <Feather 
            name='search'
            size={22}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

        <View style={styles.headerContainer}>
          <Header background={['#1ed6ff', '#97c1ff']} weather={city}/>
          <Conditions weather={city}/>
        </View>
        
      </SafeAreaView>  
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Feather
          name='chevron-left'
          size={32}
          color='#1a1a1a'
        />
        <Text style={{ fontSize: 22 }}>Voltar</Text>
      </TouchableOpacity>
    
      <View style={styles.searchBox}>
        <TextInput
          value={input}
          onChangeText={(text) => setInput(text)}
          placeholder="Ex: Caxias do Sul, RS"
          style={styles.input} 
        />
        <TouchableOpacity style={styles.inputButton} onPress={() => handleSearch(input)}>
          <Feather 
            name='search'
            size={22}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      {error && <Text style={styles.errorMsg}>Cidade não encontrada!</Text>}
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#e8f0f0",
    paddingTop: '10%'
  },

  backButton: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    padding: 6,
    marginBottom: 12
  },

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1ed6ff',
    width: '90%',
    height: 50,
    borderRadius: 8,
  },

  input: {
    width: '85%',
    height: 50,    
    backgroundColor: '#fff',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    paddingLeft: 12,
  },

  inputButton: {
    width: '15%',
    height: 50,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },

  errorMsg: {
    color: 'tomato',
    fontSize: 16,
    marginTop: 16
  },

  headerContainer: {
    width: '90%',
    height: 600,
    marginTop: 20
  }
})