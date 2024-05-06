<script setup lang="ts">
import { ref } from 'vue'
import { supabase } from '../../utils/supabase'
import { MdEditor } from 'md-editor-v3'
import { storeToRefs } from 'pinia'
import 'md-editor-v3/lib/style.css'
import type { Feed, Category } from '../resources/model';
import { ElNotification } from 'element-plus'
import { useSessionStore } from '@/stores/sessionStore';

const sessionStore = useSessionStore();

const { current_user } = storeToRefs(sessionStore);

const textRef = ref<string>('')
const titleRef = ref<string>('')
const category_id = ref<number>()

const categories = defineModel<Category[] | null>('categories')

const handleSubmit = async (): Promise<void> => {
  const { data, error } = await supabase
    .from('Feeds')
    .insert([
      {
        category_id: category_id.value,
        title: titleRef.value,
        user_id: current_user.value.session?.user.id, // todo: 유저 등록할 때 유저 테이블에 등록하게 하면 좋을듯
        content: textRef.value
      }
    ])
    .select()
  if (error) {
    ElNotification({
      type: 'error',
      message: '피드 작성에 실패했습니다.'
    })
  } else {
    ElNotification({
      type: 'success',
      message: '피드가 작성되었습니다.'
    })
  }
}
</script>

<template>
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
    <MdEditor v-model="textRef" language="en-US" />
    <div class="btn-wrapper">
      <div class="submit-btn" 
        @click="handleSubmit"
        :class="{ disabled: !textRef || !titleRef || !category_id }"
      >
        Submit
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
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
  .disabled {
    background: grey;
    pointer-events : none;
  }
}
</style>
