/**
 * @Description: 图片透视变换页面组件
 * @Author: 陈思宇
 * @Date: 2026-03-17 10:05:00
 * @LastEditors: 陈思宇
 * @LastEditTime: 2026-03-17 10:55:00
 */
<template>
	<div class="perspective-console">
		<h3>透视变换控制面板</h3>
		<div class="points">
			<div v-for="(p, i) in corners" :key="i">点 {{ i + 1 }}: {{ p.x }}, {{ p.y }}</div>
		</div>
		<div class="actions">
			<button class="btn" @click="reset">重置锚点</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { usePerspectiveTransformStore } from '@/store/picture/AffineTransform/perspectiveTransform';

const store = usePerspectiveTransformStore();
const { corners } = toRefs(store);

const reset = () => {
	store.corners = [
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 },
		{ x: 0, y: 0 }
	];
};
</script>

<style scoped>
.perspective-console{
	padding: var(--operate-padding);
	display: flex;
	flex-direction: column;
	gap: var(--operate-gap);
}
.points{ color: #fff }
.actions .btn{
	padding: 6px 10px;
	background: #409eff;
	color: #fff;
	border: none;
	border-radius: 4px;
}
</style>