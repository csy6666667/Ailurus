/**
 * @Description: 图片旋转页面组件
 * @Author: 陈思宇
 * @Date: 2026-03-13 12:00:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-13 12:12:00
 */
<template>
  <div class="rotate-module">
    <label>旋转</label>
    <el-slider v-model="angle" :max="360" :min="0">
      
    </el-slider>
  </div>
</template>

<script setup lang="ts">
import {ref, type Ref} from 'vue';

const angle: Ref<number> = ref(0);
</script>

<style scoped>
.rotate-module{
  flex: 1;
  padding: 32px;
  color: #fff;
}
</style>