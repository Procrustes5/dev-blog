<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '../../utils/supabase';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const text = ref<string>('');

const handleLogin = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google'
  })
}

</script>

<template>
  <div class="body">
    <div class="body-header">
      <span>안녕하세요. 개발자 블로그입니다.</span>
    </div>
    <span>작성</span>
    <MdEditor v-model="text" language="en-US"/>
    <div class="blog-feed-wrapper">
      <span class="blog-feed-title">피드</span>
      <div v-for="(item, index) in feeds" :key="index" class="blog-feed">
        <div class="feed-header">
          <span class="title">{{ `제목: ${item.title}` }}</span>
          <span class="category">{{ `카테고리: ${item.category}` }}</span>
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
  .blog-feed-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid grey;
    border-radius: 4px;
    padding: 12px;
    margin: 16px 0px;
    .blog-feed-title {
      color: rgba($color: #000000, $alpha: 0.8);
      font-size: 20px;
      border-bottom: solid 1px grey;
      margin-bottom: 8px;
    }
    .blog-feed {
      width: 100%;
      box-shadow: 0px 0px 2px black;
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
