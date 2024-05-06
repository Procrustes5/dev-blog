<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const router = useRouter();

const handleClick = (): void => {
  if (route.name === 'home') {
    router.go(0);
  } else {
    router.push('/');
  }
}
</script>

<template>
  <div class="header">
    <div class="header-left">
      <span class="title" @click="handleClick">Developer blog</span>
    </div>
    <div class="header-right"></div>
  </div>
</template>
<style scoped lang="scss">
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
</style>
