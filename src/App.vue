<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '../utils/supabase'
</script>

<template>
  <div class="container">
    <div class="header">
      <div class="header-left">
        <span class="title">Developer blog</span>
      </div>
      <div class="header-right"></div>
    </div>
    <router-view />
  </div>
</template>
<style scoped lang="scss">
span,
p {
  color: black;
}
.container {
  display: flex;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  flex-direction: column;
  overflow-y: auto;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    background: blueviolet;
    padding: 10px 14px;
    .header-left {
      .title {
        font-size: 20px;
        font-weight: 600;
        color: whitesmoke;
      }
    }
  }
}
</style>
