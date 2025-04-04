import { ref, watch } from 'vue'

// Simple cookie handler functions
const getCookie = (name: string) => {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop()?.split(';').shift()
}

const setCookie = (name: string, value: string, days = 365) => {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  const expires = `expires=${date.toUTCString()}`
  document.cookie = `${name}=${value}; ${expires}; path=/`
}

const isDark = ref(getCookie('theme') !== 'light')

watch(isDark, newValue => {
  setCookie('theme', newValue ? 'dark' : 'light')
  document.documentElement.classList.toggle('dark', newValue)
})

// Initialize theme on page load
document.documentElement.classList.toggle('dark', isDark.value)

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
  }

  return {
    isDark,
    toggleTheme,
  }
}
