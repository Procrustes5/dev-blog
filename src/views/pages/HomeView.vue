<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '/utils/supabase'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import type { Feed, Category } from '../resources/model';
import { ElNotification } from 'element-plus'
import BlogFeed from '@/components/BlogFeed.vue';
import PostForm from '@/components/PostForm.vue';

const feeds = ref<Feed[] | null>([])
const category_id = ref<number>()
const categories = ref<Category[] | null>([])

const getCategories = async (): Promise<void> => {
  let { data } = await supabase.from('Categories').select('id, name, parent_category')
  categories.value = data
}

const getFeeds = async (): Promise<void> => {
  let { data } = await supabase.from('Feeds').select('category_id, content, title, user_id')
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
    <BlogFeed v-model:feeds="feeds" v-model:categories="categories" />
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
  .post-form {
    display: flex;
    flex-direction: column;
    width: 100%;
    .title-form {
      margin: 8px 0px;
      width: 100%;
      display: flex;
      gap: 8px;
      align-items: center;
      span {
        font-size: 18px;
      }
      .title {
        width: 100%;
        border: 1px solid #e6e6e6;
        border-radius: 4px;
        height: 32px;
        padding: 4px 8px;
      }
    }
  }
  .btn-wrapper {
    display: flex;
    justify-content: end;
    margin-top: 12px;
    .submit-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 40px;
      background: blueviolet;
      border-radius: 4px;
      color: white;
      font-weight: 600;
      cursor: pointer;
    }
  }
  .spacing {
    height: 30px;
  }
}
</style>
