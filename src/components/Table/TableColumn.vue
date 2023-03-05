<template>
    <div class="table-column">
      <span class="table-column__title" v-if="columnTitle">{{ columnTitle }}:</span>
        <slot></slot>
        
    </div>
</template>

<script setup>
const props = defineProps({
  columnTitle:{
    type: String,
    required: false
  }
})
</script>


<style lang="scss" scoped>
.table-column {
  border-right:  1px solid rgb(207, 207, 207);
  padding: 15px 0;
  position: relative;
  &__title {
    margin-right: 5px;
    display: none;
    @media screen and (max-width: 767px) {
      display: inline-block;
    }
  }
}
</style>