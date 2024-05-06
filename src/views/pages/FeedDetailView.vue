<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '/utils/supabase'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import type { Feed, Category } from '../resources/model'
import { ElNotification } from 'element-plus'

onMounted(() => {})
</script>

<template>
  <div class="detail-container">
    <div class="detail-header">
      <span>title</span>
    </div>
    <div class="detail-body">
      <div class="detail-body-main"></div>
      <div class="detail-navbar"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.detail-container {
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .detail-header {
    width: 80%;
    height: 60px;
    background: lightcoral;
    display: flex;
    align-items: center;
  }
  .detail-body {
    width: 80%;
    height: 100%;
    background: lightblue;
  }
}
</style>
