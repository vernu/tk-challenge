import axios from 'axios'

const httpClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4005',
})

export default httpClient
