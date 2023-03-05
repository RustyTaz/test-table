<template>
	<input :value="value" :placeholder="placeholder" @input="updateValue" />
</template>

<script setup>
const emit = defineEmits(["update:value"]);
const props = defineProps({
	value: {
		type: String,
		default: "",
	},
	placeholder: {
		type: String,
		required: true,
	},
});
const updateValue = (e) => {
	emit("update:value", e.target.value);
};
</script>

<style scoped>
input {
	border: 1px solid grey;
	padding: 10px 25px;
	margin: 5px 5px;
}
</style>
