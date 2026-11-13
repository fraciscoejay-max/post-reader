import axios from 'axios'

const apiBaseUrl =
  import.meta.env.VITE_API_URL?.trim() || 'https://jsonplaceholder.typicode.com'

const api = axios.create({
  baseURL: apiBaseUrl,
})

api.interceptors.response.use(
  (response) => {
    const contentType = String(response.headers['content-type'] ?? '')

    if (!contentType.includes('application/json')) {
      throw new Error(
        `Expected a JSON response from ${response.config.url}, but received ${contentType || 'an unknown content type'}. Check the VITE_API_URL deployment setting.`
      )
    }

    return response
  },
  (error) => {
    const contentType = String(error?.response?.headers?.['content-type'] ?? '')

    if (error?.response?.status === 404) {
      return Promise.reject(error)
    }

    if (error?.response && !contentType.includes('application/json')) {
      return Promise.reject(
        new Error(
          `The API at ${apiBaseUrl} returned HTTP ${error.response.status} with ${contentType || 'an unknown content type'}. Check the VITE_API_URL deployment setting.`
        )
      )
    }

    if (!error?.response) {
      return Promise.reject(
        new Error(
          `Could not reach the API at ${apiBaseUrl}. Check the network connection and VITE_API_URL deployment setting.`
        )
      )
    }

    return Promise.reject(error)
  }
)

export default api
