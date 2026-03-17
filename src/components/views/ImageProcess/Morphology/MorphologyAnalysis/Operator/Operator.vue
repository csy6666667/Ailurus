/**
 * @Description: 算子选择组件
 * @Author: 陈思宇
 * @Date: 2026-03-16 18:16:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-16 21:25:00
 */
 <template>
  <section class="panel-section">
    <h3 class="operator-title">形态学算子</h3>
    <select  class="styled-select" v-model="morphologyStore.operator">
      <option value="MORPH_ERODE">腐蚀 (Erosion)</option>
      <option value="MORPH_DILATE">膨胀 (Dilation)</option>
      <option value="MORPH_OPEN">开运算 (Opening)</option>
      <option value="MORPH_CLOSE">闭运算 (Closing)</option>
      <option value="MORPH_GRADIENT">形态学梯度 (Gradient)</option>
      <option value="MORPH_TOPHAT">顶帽 (Top Hat)</option>
      <option value="MORPH_BLACKHAT">黑帽 (Black Hat)</option>
    </select>
  </section>
 </template>

<script setup lang="ts">
import { useMorphologyStore } from '@/store/picture/Morphology/morphology';

const morphologyStore = useMorphologyStore();
</script>

 <style scoped>
.operator-title{
  font-size: var(--operate-title-fs);
  color: var(--operate-title-color-1);
  font-weight: var(--operate-title-fw);
}

.styled-select {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  color: #333;
  font-size: 14px;
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iOCIgdmlld0JveD0iMCAwIDEyIDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xIDFMNiA2TDExIDEiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+');
  background-repeat: no-repeat;
  background-position: right 8px center;
  padding-right: 25px;
  transition: border-color 0.2s ease;
}

.styled-select:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
}
</style>