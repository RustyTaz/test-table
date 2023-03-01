<script setup>
const emit = defineEmits(['update:value'])
const props = defineProps({
  value: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    required: true
  }
})
const updateValue = (e) => {
  emit('update:value', e.target.value)
}
</script>

<template>
    <input :value="value"
    :placeholder="placeholder"
    @input="updateValue">
    
</template>

<style scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 15px;
}
</style>