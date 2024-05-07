<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '/utils/supabase'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import type { Feed, Category } from '../resources/model'
import { ElNotification } from 'element-plus'

const feed = ref<Feed>();

const getFeedById = async (): Promise<void> => {
  let { data, error } = await supabase
    .from('Feed')
    .select('Category(name), content, title, user_id')
    .eq('id', 17)
  feed.value = data[0]
}

onMounted(() => {
  getFeedById()
})
</script>

<template>
  <div class="detail-container">
    <div class="detail-header">
      <span>{{ feed?.title }}</span>
    </div>
    <div class="detail-body">
      <div class="detail-body-main">
        
      </div>
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
