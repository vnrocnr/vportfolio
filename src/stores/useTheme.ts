
import { ref, watchEffect } from 'vue'

const theme = ref(localStorage.getItem('theme') || 'light-theme')

const Dark = ref(theme.value === 'dark-theme')

watchEffect(() => {
  localStorage.setItem('theme', theme.value)
  Dark.value = theme.value === 'dark-theme'
  document.documentElement.classList.toggle('dark', Dark.value)
})

const toggleTheme = () => {
  theme.value = theme.value === 'light-theme' ? 'dark-theme' : 'light-theme'
}

export function useTheme() {
  return { theme, Dark, toggleTheme }
}
