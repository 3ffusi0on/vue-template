import { ref, Ref } from 'vue'
import type { ApiResponse } from '../types/common'

interface UseFetchOptions {
  immediate?: boolean
  headers?: Record<string, string>
}

export function useFetch<T>() {
  const data: Ref<T | null> = ref(null)
  const error = ref<Error | null>(null)
  const loading = ref(false)

  const fetchData = async (
    url: string,
    options: RequestInit = {},
    fetchOptions: UseFetchOptions = {},
  ): Promise<ApiResponse<T> | null> => {
    const { immediate = true, headers = {} } = fetchOptions

    if (!immediate) return null

    loading.value = true
    error.value = null

    try {
      const defaultHeaders = {
        'Content-Type': 'application/json',
        ...headers,
      }

      const response = await fetch(url, {
        ...options,
        headers: {
          ...defaultHeaders,
          ...options.headers,
        },
      })

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`)
      }

      const jsonData = await response.json()
      data.value = jsonData.data || jsonData

      return {
        data: jsonData.data || jsonData,
        status: response.status,
        message: jsonData.message,
      }
    } catch (err) {
      error.value = err instanceof Error ? err : new Error('Unknown error occurred')
      return null
    } finally {
      loading.value = false
    }
  }

  return {
    data,
    error,
    loading,
    fetchData,
  }
}
