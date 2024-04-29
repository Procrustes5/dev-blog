<script setup lang="ts">
import { ref, onMounted } from 'vue' 
import { supabase } from '../utils/supabase'
const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<template>
  <div class="container">
    <div class="header">
      <div class="header-left">
          <span class="title">Developer blog</span>
      </div>
      <div class="header-right">
        menu
      </div>  
    </div>
    <router-view />
    <div class="footer">Sundial Games</div>
  </div>
</template>
<style scoped lang="scss">
span, p {
  color: black;
}
.container {
  display: flex;
  width: 100vw;
  flex-direction: column;
  overflow-y: auto;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 70px;
    background: lightcoral;
    padding: 0px 14px;
    .header-left {
      .title {
        font-size: 20px;
        font-weight: 600;
        color: whitesmoke;
      }
    }
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
  .footer {
    width: 100%;
    height: 60px;
    background: lightgreen;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
  }
}
</style>