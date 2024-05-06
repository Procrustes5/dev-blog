<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Feed, Category } from '../resources/model';

const router = useRouter();

const feeds = defineModel<Feed[] | null>('feeds')
const categories = defineModel<Category[] | null>('categories')

const getCategoryNameById = (category_id: number): string => {
  const getCategoriesById = categories.value?.filter((category) => category.id === category_id)[0]
  const category_name = getCategoriesById?.name
  return category_name ?? ''
}
</script>

<template>
  <div class="blog-feed-wrapper">
    <span class="blog-feed-title">Feed</span>
    <div class="blog-feed" v-for="(item, index) in feeds" :key="index" @click="router.push('/feed')">
      <div class="feed-container">
        <span class="title">{{ item.title }}</span>
        <span class="category">{{ getCategoryNameById(item.category_id) }}</span>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.blog-feed-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  padding: 12px;
  margin: 16px 0px;
  overflow-y: auto;
  .blog-feed-title {
    color: rgba($color: #000000, $alpha: 0.8);
    font-size: 20px;
    border-bottom: solid 1px #e6e6e6;
    margin-bottom: 12px;
  }
  .feed-index {
    width: 100%;
    display: flex;
    padding: 0px 12px;
    .title {
      min-width: 200px;
      margin-right: 12px;
    }
  }
  .blog-feed {
    width: 100%;
    box-shadow: 0px 0px 2px #a0a0a0;
    margin: 4px 0px;
    padding: 12px;
    .feed-container {
      display: flex;
      .title {
        min-width: 200px;
        margin-right: 12px;
      }
      .category {
        
      }
    }
  }
}
</style>
