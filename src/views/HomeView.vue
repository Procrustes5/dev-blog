<script setup lang="ts">
const mockFeeds = [
  { title: "신기능 개발", category: "개발", content: "안녕하세요. 오늘은 어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고" },
  { title: "신기능 개발", category: "개발", content: "안녕하세요. 오늘은 어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고" },
  { title: "신기능 개발", category: "개발", content: "안녕하세요. 오늘은 어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고" },
  { title: "신기능 개발", category: "개발", content: "안녕하세요. 오늘은 어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고" },
  { title: "신기능 개발", category: "개발", content: "안녕하세요. 오늘은 어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고" },
  { title: "신기능 개발", category: "개발", content: "안녕하세요. 오늘은 어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고" }
];
</script>

<template>
<div class="body">
  <div class="body-header">
      <span>안녕하세요. 개발자 블로그입니다.</span>
  </div> 
  <div class="blog-feed-wrapper">
    <span class="blog-feed-title">피드</span>
    <div v-for="(item, index) in mockFeeds" :key="index" class="blog-feed">
      <div class="feed-header">
        <span class="title">{{ `제목: ${item.title}` }}</span>
        <span class="category">{{ `카테고리: ${item.category}` }}</span>
      </div>
      <div class="feed-body">
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped lang="scss">
span, p {
  color: black;
}

.body {
  width: 100%;
  height: 100%;
  background: white;
  padding: 20px 100px;
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
    border: 4px solid grey;
    border-radius: 4px;
    padding: 12px;
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
}
</style>