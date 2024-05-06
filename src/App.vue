<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { supabase } from '/utils/supabase'
import Header from '@/components/Header.vue'
import { useSessionStore } from './stores/sessionStore'

const sessionStore = useSessionStore()

const { current_user } = storeToRefs(sessionStore)

const getSession = async (): Promise<void> => {
  const { data } = await supabase.auth.getSession()
  current_user.value = data
}

onMounted(() => {
  getSession()
})
</script>

<template>
  <div class="container">
    <Header></Header>
    <router-view />
  </div>
</template>
<style scoped lang="scss">
.container {
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  flex-direction: column;
  overflow-y: auto;
}
</style>
