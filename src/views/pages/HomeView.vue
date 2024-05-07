<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '/utils/supabase'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import type { Feed, Category } from '../resources/model'
import { ElNotification } from 'element-plus'
import BlogFeed from '@/components/BlogFeed.vue'
import PostForm from '@/components/PostForm.vue'

const feeds = ref<Feed[] | null>([])
const categories = ref<Category[] | null>([])

const getCategories = async (): Promise<void> => {
  let { data } = await supabase.from('Category').select('id, name, parent_category')
  categories.value = data
}

const getFeeds = async (): Promise<void> => {
  let { data, error } = await supabase
    .from('Feed')
    .select('Category(name), content, title, user_id')
  feeds.value = data
}

const handleLogin = async (): Promise<void> => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google'
  })
}

onMounted(() => {
  getFeeds()
  getCategories()
})
</script>

<template>
  <div class="body">
    <div class="body-header">
      <span>👷 블로그 개발중</span>
    </div>
    <PostForm v-model:categories="categories" />
    <BlogFeed v-model:feeds="feeds" />
    <div class="spacing"></div>
  </div>
</template>
<style scoped lang="scss">
.body {
  width: 100%;
  height: 100%;
  background: white;
  padding: 20px 100px;
  margin-bottom: 20px;
  .body-header {
    margin-bottom: 20px;
    span {
      font-size: 18px;
    }
  }
  .spacing {
    height: 30px;
  }
}
</style>
