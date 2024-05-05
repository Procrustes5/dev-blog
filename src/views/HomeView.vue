<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { supabase } from '../../utils/supabase';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const text = ref<string>('');
const feeds = ref<unknown[] | null>([]);
const user = ref();

const getSession = async () => {
  const { data, error } = await supabase.auth.getSession()
  user.value = data;
}

const getFeeds = async () => {
  let { data, error } = await supabase
    .from('Feeds')
    .select('*')
  feeds.value = data
}
          
const handleSubmit = async () => {
  const { data, error } = await supabase
    .from('Feeds')
    .insert([
      { 
        category_id: 1,
        title: '12',
        user_id: user.value.session?.user.id,
        content: text.value,
      },
    ])
    .select()
  console.log(error)
}

const handleLogin = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google'
  })
}

onMounted(() => {
  getFeeds()
  getSession()
})
</script>

<template>
  <div class="body">
    <div class="body-header">
      <span>Developer blog</span>
    </div>
    <span>Post the feeds</span>
    <MdEditor v-model="text" language="en-US"/>
    <div class="btn-wrapper">
      <div class="submit-btn" @click="handleSubmit">Submit</div>
    </div>
    <div class="blog-feed-wrapper">
      <span class="blog-feed-title">Feed</span>
      <div v-for="(item, index) in feeds" :key="index" class="blog-feed">
        <div class="feed-header">
          <span class="title">{{ `Title: ${item.title}` }}</span>
          <span class="category">{{ `Category: ${item.category}` }}</span>
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
