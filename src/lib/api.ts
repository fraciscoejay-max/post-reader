import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const contentType = error?.response?.headers?.['content-type'] ?? ''

    if (contentType.includes('application/json')) {
      throw error
    }

    if (error?.response?.status === 200) {
      throw new Error('Unexpected HTML response from the API.')
    }

    if (error?.response?.status === 404) {
      throw error
    }

    throw new Error(
      'The API is unavailable or returned an unexpected response. Please try again later.'
    )
  }
)

export default api
