<template>
	<div class="select">
		<button class="btn" :class="{'btn-active': showSelect}" @click="hideSelect()">Редактировать таблицу</button>
		<div class="select-wrapper">
			<ul
				class="select-list"
				v-show="showSelect"
				v-for="(item, index) in headList"
				@click="setColumn(index)"
			>
				<li>{{ item.visible ? "✓ " : "✕ " }}{{ item.name }}</li>
			</ul>
		</div>
	</div>
</template>
<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
	headList: {
		type: Object,
		required: true,
	},
});

const emit = defineEmits(["setColumn"]);

let showSelect = ref(false);

function setColumn(column: string) {
	emit("setColumn", column);
}

function hideSelect() {
	showSelect.value = !showSelect.value;
}
</script>

<style lang="scss" scoped>

.btn {
	background: none;
	border: 1px solid grey;
	padding: 10px 35px;
	&-active{
		background-color:#D9D9D9;
	}
}

li {
	list-style-type: none;
}

.select {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	&-wrapper {
		position: absolute;
		background-color: white;
		border-left: 1px solid black;
		border-right: 1px solid black;
		border-bottom: 1px solid black;
		top: 50px;
		z-index: 100;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	&-list {
		margin: 0;
		padding: 10px;
		border-top: 1px solid black;
		color: black;
	}
}
</style>
