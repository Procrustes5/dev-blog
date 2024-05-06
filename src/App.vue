<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '../utils/supabase'
import Header from '@/components/Header.vue'
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
