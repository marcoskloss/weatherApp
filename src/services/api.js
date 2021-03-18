import axios from 'axios'

//https://api.hgbrasil.com/weather?key=6df7e349&lat=-23.682&lon=-46.875

export const api = axios.create({
  baseURL: 'https://api.hgbrasil.com'
})