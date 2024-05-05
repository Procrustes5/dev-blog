<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { supabase } from '../../utils/supabase'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import type { UUID } from 'crypto'

interface Feed {
  category_id: number
  content: string
  title: string
  user_id: UUID
}

interface Category {
  id: number
  name: string
  parent_category: number | null
}

const text = ref<string>('')
const titleRef = ref<string>('')
const current_user = ref()
const feeds = ref<Feed[] | null>([])
const category_id = ref<number>()
const categories = ref<Category[] | null>([])

const getSession = async (): Promise<void> => {
  const { data } = await supabase.auth.getSession()
  current_user.value = data
}

const getCategories = async (): Promise<void> => {
  let { data } = await supabase.from('Categories').select('id, name, parent_category')
  categories.value = data
}

const getFeeds = async (): Promise<void> => {
  let { data } = await supabase.from('Feeds').select('category_id, content, title, user_id')
  feeds.value = data
}

const handleSubmit = async (): Promise<void> => {
  const { data, error } = await supabase
    .from('Feeds')
    .insert([
      {
        category_id: category_id.value,
        title: titleRef.value,
        user_id: current_user.value.session?.user.id,
        content: text.value
      }
    ])
    .select()
}

const handleLogin = async (): Promise<void> => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google'
  })
}

const getCategoryNameById = (category_id: number): string => {
  const getCategoriesById = categories.value?.filter((category) => category.id === category_id)[0]
  const category_name = getCategoriesById?.name
  return category_name ?? '';
}

onMounted(() => {
  getFeeds()
  getSession()
  getCategories()
})
</script>

<template>
  <div class="body">
    <div class="body-header">
      <span>👷 블로그 개발중</span>
    </div>
    <div class="post-form">
      <div class="title-form">
        <el-select v-model="category_id" clearable placeholder="Category" style="width: 240px">
          <el-option
            v-for="item in categories"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
        <span>Title</span>
        <input type="text" class="title" v-model="titleRef" />
      </div>
      <MdEditor v-model="text" language="en-US" />
      <div class="btn-wrapper">
        <div class="submit-btn" @click="handleSubmit">Submit</div>
      </div>
    </div>
    <div class="blog-feed-wrapper">
      <span class="blog-feed-title">Feed</span>
      <div v-for="(item, index) in feeds" :key="index" class="blog-feed">
        <div class="feed-header">
          <span class="title">{{ `Title: ${item.title}` }}</span>
          <span class="category">{{ `Category: ${getCategoryNameById(item.category_id)}` }}</span>
        </div>
        <div class="feed-body">
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
    <div class="spacing"></div>
  </div>
</template>
<style scoped lang="scss">
span,
p {
  color: black;
}

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
  .blog-feed-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid #e6e6e6;
    border-radius: 4px;
    padding: 12px;
    margin: 16px 0px;
    .blog-feed-title {
      color: rgba($color: #000000, $alpha: 0.8);
      font-size: 20px;
      border-bottom: solid 1px #e6e6e6;
      margin-bottom: 8px;
    }
    .blog-feed {
      width: 100%;
      box-shadow: 0px 0px 2px #a0a0a0;
      margin: 8px 0px;
      padding: 16px 12px;
      .feed-header {
        display: flex;
        margin-bottom: 8px;
        .title {
          margin-right: 12px;
        }
      }
    }
  }
  .spacing {
    height: 30px;
  }
}
</style>
