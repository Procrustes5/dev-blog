import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSessionStore = defineStore('session', () => {
  const current_user = ref()

  return { current_user }
})
