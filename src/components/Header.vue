<script setup lang="ts">
</script>

<template>
  <div class="header">
    <div class="header-left">
      <span class="title">Developer blog</span>
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
