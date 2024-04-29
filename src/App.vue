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